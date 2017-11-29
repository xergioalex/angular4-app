import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {nombre:'Florería la Gardenia', active: true },
    {nombre:'Donas la pasadita', active: false },
    {nombre:'Veterinaria Huellitas Felices', active: true },
    {nombre:'Florería la Gardenia', active: true },
    {nombre:'Donas la pasadita', active: true },
    {nombre:'Veterinaria Huellitas Felices, active: true '}
  ];
  constructor() {
  	
  }

}
