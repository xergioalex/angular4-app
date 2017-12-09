import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
	registerFields: any = {};
	constructor( private authService:AuthService) {

	}
	register() {
		this.authService.login(this.registerFields.email, this.registerFields.password);
	}
}
