// Import Angular core features
import { Component, Input } from '@angular/core';

// Import CommonModule for basic Angular directives
import { CommonModule } from '@angular/common';

// Import User interface (data model)
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card', // Component tag name
  standalone: true, // Standalone component (no NgModule)
  imports: [CommonModule], // Required Angular module
  templateUrl: './user-card.html', // HTML template file
  styleUrls: ['./user-card.css']   // CSS styles file
})
export class UserCard {

  // Receive user data from parent component
  @Input() user!: User;

}