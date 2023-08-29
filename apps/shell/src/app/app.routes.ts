import { Route } from '@angular/router';
export const appRoutes: Route[] = [
    {
        path:'users',
        loadChildren:()=>import('@demo-angular-ngrx/users/feature').then(config=>config.USER_ROUTES)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'users'
    }
];
