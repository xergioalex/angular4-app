import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
	lugares:any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre:'Florería la Gardenia', active: true, description: 'Proident esse.' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, nombre:'Donas la pasadita', active: false, description: 'Aliquip velit sed.' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, nombre:'Veterinaria Huellitas Felices', active: true, description: 'Do amet quis.' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, nombre:'Florería la Gardenia', active: true, description: 'Minim laboris ut sit.' },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, nombre:'Donas la pasadita', active: true, description: 'Minim sunt aute nisi esse.' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, nombre:'Veterinaria Huellitas Felices', active: true, description: 'Sunt velit.'  }
  ];
  id = null;
  lugar:any = {};
	constructor(private route: ActivatedRoute) {
		//console.log(this.route.snapshot.params['id']);
		//console.log(this.route.queryParams);
		//console.log(this.route.snapshot.queryParams['action']);

		this.id = this.route.snapshot.params['id'];
		this.lugar = this.buscarLugar();
	}

	buscarLugar() {
		return this.lugares.filter((lugar) => { return parseInt(lugar.id) === parseInt(this.id) })[0] || null;
	}
}
