import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
	constructor( private authService:AuthService) {
		this.authService.login('email', 'password');
	}
}
