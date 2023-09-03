import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@demo-angular-ngrx/users/ui';
import { UserFacade } from '../user-facade.service';
import { User } from '@demo-angular-ngrx/users/domain';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'demo-angular-ngrx-users',
  standalone: true,
  imports: [CommonModule,UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent{

  constructor(
    public readonly userFacade:UserFacade,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}

  showUserDetails(user:User)
  {
    this.router.navigate(['user','detail',user.id],{relativeTo:this.activatedRoute})
  }
}
