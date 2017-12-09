import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';

@Injectable()
export class AuthService {
	constructor(private angularFireAuth:AngularFireAuth) {

	}
	public login = (email, password) => {
		console.log('Login method');
	}
	public register = (email, password) => {
		this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				alert('User registered with success!');
				console.log(response);
			})
			.catch((error) => {
				alert('An errors was happend');
				console.log(error);
			});
	}
}
