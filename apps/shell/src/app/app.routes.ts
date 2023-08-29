import { Route } from '@angular/router';
export const appRoutes: Route[] = [
    {
        path:'',
        loadChildren:()=>import('@demo-angular-ngrx/users/feature').then(config=>config.USER_ROUTES)
    }
];
