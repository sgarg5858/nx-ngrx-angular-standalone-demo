import {Route} from '@angular/router'
import { UsersFeatureComponent } from './users-feature/users-feature.component'
import { UsersComponent } from './users/users.component'
import { provideState } from '@ngrx/store'
import { usersFeatureState,UserEffects } from '@demo-angular-ngrx/users/data-access'
import { provideEffects } from '@ngrx/effects'
export const USER_ROUTES:Route[]=[
    {
        path:'',
        component:UsersFeatureComponent,
        providers:[
            provideState(usersFeatureState),
            provideEffects([UserEffects])
        ],
        children:[
            {
                path:'',
                component:UsersComponent
            }
        ]
    }
]