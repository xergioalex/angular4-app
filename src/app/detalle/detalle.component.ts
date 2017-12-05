import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detall',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id = null;
  lugar:any = {};
	constructor(private route: ActivatedRoute, private lugaresService:LugaresService) {
		//console.log(this.route.snapshot.params['id']);
		//console.log(this.route.queryParams);
		//console.log(this.route.snapshot.queryParams['action']);

		this.id = this.route.snapshot.params['id'];
		this.lugar = this.lugaresService.buscarLugar(this.id);
	}


}
