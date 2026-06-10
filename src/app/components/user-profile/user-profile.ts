import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {

  name = '';
  email = '';
  mobile = '';

  save() {
    alert(
      `Name: ${this.name}
Email: ${this.email}
Mobile: ${this.mobile}`
    );
  }
}