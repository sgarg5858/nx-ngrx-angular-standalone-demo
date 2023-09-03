import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFacade } from '../user-facade.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TransformAddressPipe } from '@demo-angular-ngrx/users/ui';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'demo-angular-ngrx-user-detail',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,TransformAddressPipe],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  constructor(
    public readonly userFacade:UserFacade,
    private router : Router,
    private activatedRoute:ActivatedRoute
    ){}
  goBack()
  {
    this.router.navigate(['../../../'],{relativeTo:this.activatedRoute})
  }
}
