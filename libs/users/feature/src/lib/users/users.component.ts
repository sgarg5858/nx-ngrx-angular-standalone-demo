import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AllUsersPageActions } from '@demo-angular-ngrx/users/data-access';

@Component({
  selector: 'demo-angular-ngrx-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit{

  constructor(private store:Store){}
  ngOnInit(): void {
      //Just intent , no need to directly communicate to external services,
      // via services.
      this.store.dispatch(AllUsersPageActions.loadAllUsers());
  }
}
