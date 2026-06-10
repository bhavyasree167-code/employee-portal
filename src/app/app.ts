import { Component } from '@angular/core';
import { Hello } from './components/hello/hello';
import { UserProfile } from './components/user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [Hello, UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}