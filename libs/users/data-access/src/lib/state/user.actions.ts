import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { User } from '@demo-angular-ngrx/users/domain'
export const AllUsersPageActions = createActionGroup({
    source:'All User Page',
    events:{
        loadAllUsers: emptyProps()
    }
})
export const AllUsersApiActions = createActionGroup({
    source:'Load All User API',
    events:{
        success: props<{users:User[]}>(),
        failed: props<{error:string}>()
    }
})

export const UserDetailPageActions = createActionGroup({
    source:'User Details Page',
    events:{
        loadUserDetails: emptyProps()
    }
})
export const UserDetailAPIActions = createActionGroup({
    source:'User Details API',
    events:{
        userDetailsAlreadyPresentInStore: props<{userDetails:User}>(),
        fetchUserDetailsViaAPI: props<{userId:string}>(),
        
        fetchUserDetailsViaAPISuccess:props<{userDetails:User}>(),
        fetchUserDetailsViaAPIError:props<{error:string}>()
    }
})