import { Injectable } from '@angular/core';
import { AllUsersPageActions, allUsers, errorInLoadingAllUsers, loadingAllUsers } from '@demo-angular-ngrx/users/data-access';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

 public readonly loadingAllUsers$= this.store.select(loadingAllUsers);
 public readonly allUsers$= this.store.select(allUsers);
 public readonly errorInLoadingAllUsers$=this.store.select(errorInLoadingAllUsers);

 loadAllUsers()
 {
  this.store.dispatch(AllUsersPageActions.loadAllUsers());
 }

  constructor(
    private store:Store
  ) { }

}
