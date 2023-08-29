import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'demo-angular-ngrx-users-feature',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './users-feature.component.html',
  styleUrls: ['./users-feature.component.css'],
})
export class UsersFeatureComponent {}
