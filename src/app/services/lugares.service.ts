import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LugaresService {
  API_ENDPOINT = 'https://platzisquare-fe242.firebaseio.com';
	lugares:any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, nombre:'Florería la Gardenia', active: true, description: 'Proident esse.' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, nombre:'Donas la pasadita', active: false, description: 'Aliquip velit sed.' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, nombre:'Veterinaria Huellitas Felices', active: true, description: 'Do amet quis.' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, nombre:'Florería la Gardenia', active: true, description: 'Minim laboris ut sit.' },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, nombre:'Donas la pasadita', active: true, description: 'Minim sunt aute nisi esse.' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, nombre:'Veterinaria Huellitas Felices', active: true, description: 'Sunt velit.'  }
  ];
  constructor(private afDB:AngularFireDatabase, private http:Http) {

  }
  // public getLugares(){
  //   //return this.afDB.list('lugares/');
  //   return this.http.get(this.API_ENDPOINT+'/.json')
  //       .map((resultado)=>{
  //           const data = resultado.json().lugares;
  //           return data;
  //       })
  // }
  public getLugares () {
    return this.afDB.list('lugares/');
  	// return this.http.get(this.API_ENDPOINT+'/lugares.json');
  }
  public getLugar(id) {
    return this.afDB.object('lugares/'+id);
  }
	public buscarLugar(id) {
    return this.lugares.filter((lugar) => { return parseInt(lugar.id) === parseInt(id) })[0] || null;
  }
  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: headers });
  }
  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
  public obtenerGeoData(direccion) {
    //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }
}