import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from '@demo-angular-ngrx/users/domain'
import { AllUsersApiActions,AllUsersPageActions } from "./user.actions";

export const USER_FEATURE_KEY='users';

export interface UserState{
    loadingAllUsers:boolean|null;
    users:User[]|null;
    errorInLoadingAllUsers:string|null;
}
export const initialUserState:UserState={
    loadingAllUsers:null,
    users:null,
    errorInLoadingAllUsers:null
}
export const userReducer = createReducer(
    initialUserState,

    on(AllUsersPageActions.loadAllUsers,
        (state)=> 
        ({...state,loadingAllUsers:true,users:null,errorInLoadingAllUsers:null})
    ),

    on(AllUsersApiActions.success,
        (state,action)=> 
        ({...state,loadingAllUsers:false,users:action.users,errorInLoadingAllUsers:null})
    ),

    on(AllUsersApiActions.failed,
        (state,action)=> 
        ({...state,loadingAllUsers:false,users:null,errorInLoadingAllUsers:action.error})
    )
)

export const usersFeatureState = createFeature({
    name:USER_FEATURE_KEY,
    reducer:userReducer
})