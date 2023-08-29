import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@demo-angular-ngrx/users/ui';
import { UserFacade } from '../user-facade.service';

@Component({
  selector: 'demo-angular-ngrx-users',
  standalone: true,
  imports: [CommonModule,UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit{

  constructor(public readonly userFacade:UserFacade){}

  
  ngOnInit(): void {
      //Just intent , no need to directly communicate to external services,
      // via services.
      this.userFacade.loadAllUsers();
  }
}
