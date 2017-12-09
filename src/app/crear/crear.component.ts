import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from "@angular/router";
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
	lugar:any = {};
	id:any = null;
	results$:Observable<any>;
	private searchField: FormControl;

    constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http:Http) {
        this.id = this.route.snapshot.params['id'];
        if (this.id !== 'new') {
        	this.lugaresService.getLugar(this.id).valueChanges()
        		.subscribe((lugar) => {
        			this.lugar = lugar;
        		});
        }
        const URL = 'http://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges
        	.debounceTime(500)
        	.switchMap(query => this.http.get(`${URL}?address=${query}`)
        	.map(response => response.json())
        	.map(response => response.results);
    };
	guardarLugar() {
		let direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
		this.lugaresService.obtenerGeoData(direccion).subscribe((result) => {
			this.lugar.lat = result.json().results[0].geometry.location.lat;
			this.lugar.lng = result.json().results[0].geometry.location.lng;
			if (this.id !== 'new') {
				this.lugaresService.editarLugar(this.lugar);
				alert('Negocio editado con éxito');
			} else {
				this.lugar.id = Date.now();
				this.lugaresService.guardarLugar(this.lugar);
				alert('Negocio guardado con éxito');
				this.lugar = {};
			}
		});
	};
	recogerDireccion(result) {
	    this.lugar.calle = result.address_components[1].long_name + ' ' + result.address_components[0].long_name;
	    this.lugar.ciudad = result.address_components[3].long_name;
	    this.lugar.pais = result.address_components[4].long_name;
	}
}
