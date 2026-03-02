import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCard } from './components/user-card/user-card';
import { UserStatus } from './components/user-status/user-status';
import { UserBio } from './components/user-bio/user-bio';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserCard, UserStatus, UserBio],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  isDarkMode = false;

  user: User = {
    name: 'Komal Sharma',
    age: 32,
    profilePicture: '/assets/profileImage.JPG',  // ✅ changed
    isOnline: true,
    bio: 'Angular student learning component interaction.'
  };

  toggleStatus() {
    this.user.isOnline = !this.user.isOnline;
  }

  updateBio(newBio: string) {
    this.user.bio = newBio;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}