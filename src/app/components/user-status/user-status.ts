// Import Angular core features
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Import CommonModule for basic Angular directives
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status', // Component selector name
  standalone: true, // Standalone component (no NgModule required)
  imports: [CommonModule], // Required module for template features
  templateUrl: './user-status.html', // HTML template file
  styleUrls: ['./user-status.css']   // CSS styles file
})
export class UserStatus {

  // Receive online status from parent component
  @Input() isOnline!: boolean;

  // Send event to parent when status is changed
  @Output() statusChange = new EventEmitter<void>();

  // Function to toggle status
  // Emits event to notify parent component
  toggle() {
    this.statusChange.emit();
  }
}