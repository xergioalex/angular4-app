import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	public login = (email, password) => {
		console.log('Login method');
	}
	public register = (email, password) => {
		console.log('Register method');
	}
}
