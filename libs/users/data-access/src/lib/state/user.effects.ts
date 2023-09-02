import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { UserService } from "../user.service";
import { UserPageActions,UserApiActions } from "./user.actions";
import { catchError, concatMap, exhaustMap, filter, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { User } from '@demo-angular-ngrx/users/domain'
import { Store } from "@ngrx/store";
import { fromUser } from "./user.selectors";
import { LOAD_STATUS } from "./user.reducer";
@Injectable()
export class UserEffects{
    constructor(
        private actions$:Actions,
        private userService:UserService,
        private store:Store
        ){}
        getUsers$= createEffect(()=>
        this.actions$.pipe(
            ofType(UserPageActions.getUsers),
            concatMap((action)=>of(action).pipe(
                withLatestFrom(this.store.select(fromUser.loadStatus))
            )),
            filter(([_,loadStatus])=> loadStatus===LOAD_STATUS.NOT_LOADED),
            map(()=>UserPageActions.loadUsers())
        ))

        loadUsers$= createEffect(()=>
        this.actions$.pipe(
            ofType(UserPageActions.loadUsers),
            exhaustMap(()=> this.userService.getUsers().pipe(
                map((users:User[])=>UserApiActions.success({users})),
                catchError(()=> of(UserApiActions.failed({error:"Couldn't load users right now, Please try again"})))
                )
            )
        ))
}