import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class MyGuard implements CanActivate {
	loggedIn = false;

	constructor(private authService:AuthService) {
		this.authService.isLogged()
			.subscribe((result) => {
				if (result && result.uid) {
					this.loggedIn = true;
				} else {
					this.loggedIn = false;
				}
			}, (error) => {
				this.loggedIn = false;
			});
	}
	canActivate() {
		return this.loggedIn;
	}

}
