import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@demo-angular-ngrx/users/data-access';

@Component({
  selector: 'demo-angular-ngrx-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {

  @Input() user:User|undefined;
}
