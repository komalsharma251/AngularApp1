import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ ADD FormsModule HERE
  templateUrl: './user-bio.html',
  styleUrls: ['./user-bio.css']
})
export class UserBio {

  @Input() bio!: string;
  @Output() bioChange = new EventEmitter<string>();

  isEditing = false;
  editedBio = '';

  startEdit() {
    this.editedBio = this.bio;
    this.isEditing = true;
  }

  save() {
    this.bioChange.emit(this.editedBio);
    this.isEditing = false;
  }

  cancel() {
    this.isEditing = false;
  }
}