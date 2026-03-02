// Import Angular core features
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Import CommonModule for structural directives (*ngIf, *ngFor)
import { CommonModule } from '@angular/common';

// Import FormsModule to use ngModel for two-way binding
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-user-bio', // Component selector
  standalone: true, // Standalone component (no NgModule required)

  // Import required Angular modules
  imports: [CommonModule, FormsModule],

  templateUrl: './user-bio.html', // HTML template
  styleUrls: ['./user-bio.css']   // Component styles
})
export class UserBio {

  // ================= INPUT =================
  // Receives bio data from parent component
  @Input() bio!: string;

  // ================= OUTPUT =================
  // Sends updated bio back to parent
  @Output() bioChange = new EventEmitter<string>();

  // Controls whether edit mode is active
  isEditing = false;

  // Temporary variable to store edited text
  editedBio = '';

  // ================= Start Editing =================
  // Copies current bio into editable field
  startEdit() {
    this.editedBio = this.bio;
    this.isEditing = true;
  }

  // ================= Save Bio =================
  // Emits updated bio to parent component
  save() {
    this.bioChange.emit(this.editedBio);
    this.isEditing = false;
  }

  // ================= Cancel Editing =================
  // Exits edit mode without saving
  cancel() {
    this.isEditing = false;
  }
}