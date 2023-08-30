import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_FEATURE_KEY, UserState } from "./user.reducer";
import { getRouterSelectors } from "@ngrx/router-store";

export const {
    selectRouteParams
} = getRouterSelectors();

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const loadingAllUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.loadingAllUsers
)

export const allUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.users
)
export const errorInLoadingAllUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.errorInLoadingAllUsers
)

export const userDetails = createSelector(
    selectUserState,
    (state:UserState)=>state.currentUserDetails
)
export const loadingUserDetails = createSelector(
    selectUserState,
    (state:UserState)=>state.loadingUserDetails
)
export const errorInLoadingUserDetails = createSelector(
    selectUserState,
    (state:UserState)=>state.errorInLoadingUserDetails
)