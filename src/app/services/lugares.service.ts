import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class LugaresService {
	lugares:any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre:'Florería la Gardenia', active: true, description: 'Proident esse.' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, nombre:'Donas la pasadita', active: false, description: 'Aliquip velit sed.' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, nombre:'Veterinaria Huellitas Felices', active: true, description: 'Do amet quis.' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, nombre:'Florería la Gardenia', active: true, description: 'Minim laboris ut sit.' },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, nombre:'Donas la pasadita', active: true, description: 'Minim sunt aute nisi esse.' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, nombre:'Veterinaria Huellitas Felices', active: true, description: 'Sunt velit.'  }
  ];
  constructor(private afDB:AngularFireDatabase) {

  }
  public getLugares () {
  	return this.lugares;
  }
	public buscarLugar(id) {
    return this.lugares.filter((lugar) => { return parseInt(lugar.id) === parseInt(id) })[0] || null;
  }
  public guardarLugar(lugar) {
    console.log(lugar);
    this.afDB.database.ref('lugares/1').set(lugar);
  }
}