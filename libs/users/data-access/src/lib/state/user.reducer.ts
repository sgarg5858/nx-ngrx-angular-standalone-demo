import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from '@demo-angular-ngrx/users/domain'
import { UserPageActions,UserApiActions } from "./user.actions";

export const USER_FEATURE_KEY='USER';
export enum LOAD_STATUS {
    'LOADING','LOADED','NOT_LOADED'
} ;
export interface UserState{
    loadStatus:LOAD_STATUS;
    users:User[];
    errorInLoadingAllUsers:string|null;
}
export const initialUserState:UserState={
    loadStatus:LOAD_STATUS.NOT_LOADED,
    users:[],
    errorInLoadingAllUsers:null,

}
export const userReducer = createReducer(
    initialUserState,

    on(UserPageActions.loadUsers,
        (state)=> 
        ({
            ...state,
            users:[],
            loadStatus:LOAD_STATUS.LOADING,
            errorInLoadingAllUsers:null,
        })
    ),

    on(UserApiActions.success,
        (state,{users})=> 
        ({
            ...state,
            loadStatus:LOAD_STATUS.LOADED,
            users:[...users],
            errorInLoadingAllUsers:null,
        })
    ),

    on(UserApiActions.failed,
        (state,{error})=> 
        ({
            ...state,
            loadStatus:LOAD_STATUS.NOT_LOADED,
            users:[],
            errorInLoadingAllUsers:error,
        })
    )
    
)

export const usersFeatureState = createFeature({
    name:USER_FEATURE_KEY,
    reducer:userReducer
})