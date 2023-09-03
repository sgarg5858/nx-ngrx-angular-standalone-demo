import { Injectable } from '@angular/core';
import {  CanActivate,UrlTree } from '@angular/router';
import { LOAD_STATUS, UserPageActions, fromUser } from '@demo-angular-ngrx/users/data-access';
import { Store } from '@ngrx/store';
import { Observable, filter, map, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataGuard implements CanActivate {

  constructor(private store:Store) { }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.store.dispatch(UserPageActions.getUsers());
    return this.store.select(fromUser.loadStatus).pipe(
      filter((loadStatus)=>loadStatus === LOAD_STATUS.LOADED),
      map(()=>true)
    )
  }
}
