import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFacade } from '../user-facade.service';

@Component({
  selector: 'demo-angular-ngrx-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit{
  constructor(public readonly userFacade:UserFacade){}

  ngOnInit(): void {
      this.userFacade.loadUserDetails();
  }
}
