import { createActionGroup, emptyProps, props} from '@ngrx/store'
import { User } from '@demo-angular-ngrx/users/domain';


export const UserPageActions = createActionGroup({
    source:'[User]',
    events:{
        getUsers:emptyProps(),
        loadUsers:emptyProps(),
    }
})
export const UserApiActions = createActionGroup({
    source:'Load All User API',
    events:{
        success: props<{users:User[]}>(),
        failed: props<{error:string}>()
    }
})
