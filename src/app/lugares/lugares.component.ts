import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lugares:any = [
    { plan: 'pagado', cercania: 1, distancia: 1, nombre:'Florería la Gardenia', active: true },
    { plan: 'gratuito', cercania: 1, distancia: 1.8, nombre:'Donas la pasadita', active: false },
    { plan: 'gratuito', cercania: 2, distancia: 5, nombre:'Veterinaria Huellitas Felices', active: true },
    { plan: 'gratuito', cercania: 3, distancia: 10, nombre:'Florería la Gardenia', active: true },
    { plan: 'pagado', cercania: 3, distancia: 35, nombre:'Donas la pasadita', active: true },
    { plan: 'gratuito', cercania: 3, distancia: 120, nombre:'Veterinaria Huellitas Felices, active: true '}
  ];
  lat:number = 4.8016199;
  lng:number = -75.6953962;
  constructor() {

  }
}
