import { Injectable } from '@angular/core';
import {LOAD_STATUS,UserPageActions,fromUser } from '@demo-angular-ngrx/users/data-access';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

 public readonly loadingUsers$= this.store.select(fromUser.loadStatus).pipe(
  map((loadStatus)=>loadStatus === LOAD_STATUS.LOADING));
 public readonly users$= this.store.select(fromUser.users);
 public readonly errorInLoadingUsers$=this.store.select(fromUser.errorInLoadingUsers);

 public readonly userDetails$=this.store.select(fromUser.userDetails);

 getUsers()
 {
  this.store.dispatch(UserPageActions.getUsers());
 }


  constructor(
    private store:Store
  ) { }

}
