import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XergioAleX';
  a = 3;
  b = 5;
  listo = false;
  myName:string = '';

  constructor() {
  	setTimeout(() => {
  		this.listo = true
  	}, 3000);
  }

  doSomething() {
    alert('Do something');
  }
}
