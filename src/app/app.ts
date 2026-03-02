// Import Angular core decorator
import { Component } from '@angular/core';

// Import CommonModule (needed for basic Angular directives like *ngIf, *ngFor)
import { CommonModule } from '@angular/common';

// Import child components (standalone components)
import { UserCard } from './components/user-card/user-card';
import { UserStatus } from './components/user-status/user-status';
import { UserBio } from './components/user-bio/user-bio';

// Import User model (TypeScript interface for strong typing)
import { User } from './models/user';

@Component({
  selector: 'app-root', // Root component selector
  standalone: true, // This is a standalone component (no NgModule needed)

  // Import child components so they can be used in template
  imports: [CommonModule, UserCard, UserStatus, UserBio],

  templateUrl: './app.html', // HTML template file
  styleUrls: ['./app.css']   // CSS styling file
})
export class App {

  // ================= Dark Mode State =================
  // Controls whether dark mode is active
  isDarkMode = false;

  // ================= User Data Object =================
  // Strongly typed using User interface
  user: User = {
    name: 'Komal Sharma',
    age: 32,
    profilePicture: '/assets/profileImage.JPG', // Image path from assets
    isOnline: true,
    bio: 'Angular student learning component interaction.'
  };

  // ================= Toggle User Online Status =================
  // Switches between true and false
  toggleStatus() {
    this.user.isOnline = !this.user.isOnline;
  }

  // ================= Update User Bio =================
  // Receives new bio text from child component
  updateBio(newBio: string) {
    this.user.bio = newBio;
  }

  // ================= Toggle Dark Mode =================
  // Adds/removes dark class in template
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}