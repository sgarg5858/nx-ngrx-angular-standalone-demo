import { Injectable } from '@angular/core';
import { AllUsersPageActions, UserDetailPageActions, allUsers, errorInLoadingAllUsers, loadingAllUsers, loadingUserDetails,errorInLoadingUserDetails,userDetails } from '@demo-angular-ngrx/users/data-access';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

 public readonly loadingAllUsers$= this.store.select(loadingAllUsers);
 public readonly allUsers$= this.store.select(allUsers);
 public readonly errorInLoadingAllUsers$=this.store.select(errorInLoadingAllUsers);

 public readonly loadingUserDetails$= this.store.select(loadingUserDetails);
 public readonly userDetails$= this.store.select(userDetails);

 public readonly errorInLoadingUserDetails$= this.store.select(userDetails);



 loadAllUsers()
 {
  this.store.dispatch(AllUsersPageActions.loadAllUsers());
 }
 loadUserDetails()
 {
  this.store.dispatch(UserDetailPageActions.loadUserDetails());
 }

  constructor(
    private store:Store
  ) { }

}
