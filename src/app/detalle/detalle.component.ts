import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
	constructor(private route: ActivatedRoute) {
		console.log(this.route.snapshot.params['id']);
		console.log(this.route.queryParams);
		console.log(this.route.snapshot.queryParams['action']);
	}
}
