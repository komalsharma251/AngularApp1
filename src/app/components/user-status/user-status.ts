import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.css']
})
export class UserStatus {

  @Input() isOnline!: boolean;
  @Output() statusChange = new EventEmitter<void>();

  toggle() {
    this.statusChange.emit();
  }
}