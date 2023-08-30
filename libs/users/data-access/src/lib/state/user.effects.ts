import { Injectable } from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects'
import { UserService } from "../user.service";
import { AllUsersApiActions, AllUsersPageActions, UserDetailAPIActions, UserDetailPageActions } from "./user.actions";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { User } from '@demo-angular-ngrx/users/domain'
import { Store } from "@ngrx/store";
import { allUsers, selectRouteParams } from "./user.selectors";
@Injectable()
export class UserEffects{
    constructor(
        private actions$:Actions,
        private userService:UserService,
        private store:Store
        ){}

        loadAllUsers$ = createEffect(()=> this.actions$.pipe(
            ofType(AllUsersPageActions.loadAllUsers),
            concatMap(()=> this.userService.getAllUsers().pipe(
                map((users:User[])=> AllUsersApiActions.success({users})),
                catchError(()=>of(AllUsersApiActions.failed({error:"Couldn't load all users"})))
            ))
        ))

        checkUserDetailInStoreElseMakeApiCall$ = createEffect(()=> this.actions$.pipe(
            ofType(UserDetailPageActions.loadUserDetails),
            concatLatestFrom(() => this.store.select(allUsers)),
            concatLatestFrom(() => this.store.select(selectRouteParams)),
            map(([[_,allUsers],params])=>{
                const userId=params['userId'];
                console.log(userId,params,allUsers)
                const userDetails = allUsers?.find((user)=>user.id==userId)
                console.log()
                if(userDetails)
                this.store.dispatch(UserDetailAPIActions.userDetailsAlreadyPresentInStore({userDetails}));
                else 
                this.store.dispatch(UserDetailAPIActions.fetchUserDetailsViaAPI({userId}));

            })
        ),{dispatch:false})

        loadUserDetails$ = createEffect(()=> this.actions$.pipe(
            ofType(UserDetailAPIActions.fetchUserDetailsViaAPI),
            concatMap((action)=> this.userService.getUserDetails(action.userId).pipe(
                map((userDetails:User)=> UserDetailAPIActions.fetchUserDetailsViaAPISuccess({userDetails})),
                catchError(()=>of(UserDetailAPIActions.fetchUserDetailsViaAPIError({error:"Couldn't load user details "})))
            ))
            
        ),{dispatch:true})
}