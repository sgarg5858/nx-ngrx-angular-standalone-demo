import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { UserService } from "../user.service";
import { AllUsersApiActions, AllUsersPageActions } from "./user.actions";
import { catchError, concatMap, map, of } from "rxjs";
import { User } from "../models/user";
@Injectable()
export class UserEffects{
    constructor(
        private actions$:Actions,
        private userService:UserService
        ){}

        loadAllUsers$ = createEffect(()=> this.actions$.pipe(
            ofType(AllUsersPageActions.loadAllUsers),
            concatMap(()=> this.userService.getAllUsers().pipe(
                map((users:User[])=> AllUsersApiActions.success({users})),
                catchError(()=>of(AllUsersApiActions.failed({error:"Couldn't load all users"})))
            ))
        ))
}