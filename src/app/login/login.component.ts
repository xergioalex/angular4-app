import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
	loginFields: any = {};
	constructor( private authService:AuthService) {
	}
	login() {
		this.authService.login(this.loginFields.email, this.loginFields.password);
	}
}
