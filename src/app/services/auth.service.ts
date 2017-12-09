import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Router } from "@angular/router";
import * as firebase from  'firebase/app';

@Injectable()
export class AuthService {
	constructor(private angularFireAuth:AngularFireAuth, private router:Router) {
		this.isLogged();
	}
	public facebookLogin() {
		this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
			.then((result) => {
				console.log(result);
				alert('User logged with facebook')
				this.router.navigate(['lugares']);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	public login = (email, password) => {
		this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
			.then((response) => {
				alert('User logged with success!');
				console.log(response);
				this.router.navigate(['lugares']);
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
	public logout() {
		this.angularFireAuth.auth.signOut();
		alert('Session closed');
		this.router.navigate(['lugares']);
	}
	public getUser() {
		return this.angularFireAuth.auth;
	}
}
