import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';

@Injectable()
export class AuthService {
	constructor(private angularFireAuth:AngularFireAuth) {
		this.isLogged();
	}
	public login = (email, password) => {
		this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
			.then((response) => {
				alert('User logged with success!');
				console.log(response);
			})
			.catch((error) => {
				alert('An errors was happend');
				console.log(error);
			});
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
	public isLogged() {
		return this.angularFireAuth.authState;
	}
}
