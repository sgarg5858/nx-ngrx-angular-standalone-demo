import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@demo-angular-ngrx/users/domain';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'demo-angular-ngrx-user',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {

  @Input() user!:User;
  @Output() showDetails = new EventEmitter<User>();

  openDetails()
  {
    if(this.user)
    this.showDetails.next(this.user);
  }
}
