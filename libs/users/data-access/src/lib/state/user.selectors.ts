import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_FEATURE_KEY, UserState } from "./user.reducer";
import { getRouterSelectors } from "@ngrx/router-store";
import { Params } from "@angular/router";
import { User } from "../..";

export const {
    selectRouteParams
} = getRouterSelectors();

const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

const loadStatus = createSelector(
    selectUserState,
    (state:UserState)=>state.loadStatus
)

const users = createSelector(
    selectUserState,
    (state:UserState)=>state.users
)
const errorInLoadingUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.errorInLoadingAllUsers
)

const userDetails = createSelector(
    users,
    selectRouteParams,
    (users:User[],params:Params)=>{
        const userId=params['userId'];
       return userId && users ? users.find((user)=>user.id == userId) : null
    }
)

export const fromUser ={
    loadStatus,users,errorInLoadingUsers,userDetails
}