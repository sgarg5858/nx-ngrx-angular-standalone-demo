import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { User } from '../models/user';
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