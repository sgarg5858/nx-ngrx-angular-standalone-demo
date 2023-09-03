import {Route} from '@angular/router'
import { UsersFeatureComponent } from './users-feature/users-feature.component'
import { UsersComponent } from './users/users.component'
import { provideState } from '@ngrx/store'
import { usersFeatureState,UserEffects } from '@demo-angular-ngrx/users/data-access'
import { provideEffects } from '@ngrx/effects'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserDataGuard } from './user-data-guard'
export const USER_ROUTES:Route[]=[
    {
        path:'',
        component:UsersFeatureComponent,
        providers:[
            provideState(usersFeatureState),
            provideEffects([UserEffects])
        ],
        canActivate:[UserDataGuard],
        children:[
            {
                path:'',
                component:UsersComponent
            },
            {
                path:'user/detail/:userId',
                component:UserDetailComponent
            }
        ]
    }
]