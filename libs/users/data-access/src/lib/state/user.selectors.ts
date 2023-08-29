import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_FEATURE_KEY, UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);
export const loadingAllUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.loadingAllUsers
)

export const allUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.loadingAllUsers
)
export const errorInLoadingAllUsers = createSelector(
    selectUserState,
    (state:UserState)=>state.errorInLoadingAllUsers
)