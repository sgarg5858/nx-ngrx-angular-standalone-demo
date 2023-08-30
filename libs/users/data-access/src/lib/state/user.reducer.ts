import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from '@demo-angular-ngrx/users/domain'
import { AllUsersApiActions,AllUsersPageActions, UserDetailAPIActions, UserDetailPageActions } from "./user.actions";
import { loadingAllUsers } from "./user.selectors";

export const USER_FEATURE_KEY='users';

export interface UserState{
    loadingAllUsers:boolean|null;
    users:User[]|null;
    errorInLoadingAllUsers:string|null;

    loadingUserDetails:boolean|null;
    currentUserDetails:User|null;
    errorInLoadingUserDetails:string|null;
}
export const initialUserState:UserState={
    loadingAllUsers:null,
    users:null,
    errorInLoadingAllUsers:null,

    currentUserDetails:null,
    loadingUserDetails:null,
    errorInLoadingUserDetails:null,
}
export const userReducer = createReducer(
    initialUserState,

    on(AllUsersPageActions.loadAllUsers,
        (state)=> 
        ({
            ...state,
            loadingAllUsers:true,
            users:null,
            errorInLoadingAllUsers:null,
            currentUserDetails:null,
            loadingUserDetails:null,
            errorInLoadingUserDetails:null
        })
    ),

    on(AllUsersApiActions.success,
        (state,action)=> 
        ({
            ...state,
            loadingAllUsers:false,
            users:action.users,
            errorInLoadingAllUsers:null,
            currentUserDetails:null,
            loadingUserDetails:null,
            errorInLoadingUserDetails:null
        })
    ),

    on(AllUsersApiActions.failed,
        (state,action)=> 
        ({
            ...state,
            loadingAllUsers:false,
            users:null,
            errorInLoadingAllUsers:action.error,
            currentUserDetails:null,
            loadingUserDetails:null,
            errorInLoadingUserDetails:null
        })
    ),
    on(UserDetailPageActions.loadUserDetails,
        (state)=> 
        ({
            ...state,
            loadingAllUsers:null,
            users: state.users ?[...state.users] : null,
            errorInLoadingAllUsers:null,
            currentUserDetails:null,
            loadingUserDetails:true,
            errorInLoadingUserDetails:null
        })
    ),
    on( 
        UserDetailAPIActions.userDetailsAlreadyPresentInStore
        ,
        (state,action)=> 
        ({
            ...state,
            loadingAllUsers:null,
            users: state.users ?[...state.users] : null,
            errorInLoadingAllUsers:null,
            currentUserDetails:action.userDetails,
            loadingUserDetails:false,
            errorInLoadingUserDetails:null
        })
    ),
    on( 
         UserDetailAPIActions.fetchUserDetailsViaAPISuccess
        ,
        (state,action)=> 
        ({
            ...state,
            loadingAllUsers:null,
            users: state.users ?[...state.users] : null,
            errorInLoadingAllUsers:null,
            currentUserDetails:action.userDetails,
            loadingUserDetails:false,
            errorInLoadingUserDetails:null
        })
    ),
    on( 
        UserDetailAPIActions.fetchUserDetailsViaAPIError
        ,
        (state,action)=> 
        ({
            ...state,
            loadingAllUsers:null,
            users: state.users ?[...state.users] : null,
            errorInLoadingAllUsers:null,
            currentUserDetails:null,
            loadingUserDetails:false,
            errorInLoadingUserDetails:action.error
        })
    )

    
)

export const usersFeatureState = createFeature({
    name:USER_FEATURE_KEY,
    reducer:userReducer
})