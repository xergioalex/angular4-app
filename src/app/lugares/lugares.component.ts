import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'PlatziSquare';

  lat:number = 4.8016199;
  lng:number = -75.6953962;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
     lugaresService.getLugares()
      .subscribe(lugares =>{
          this.lugares = lugares;
          var me = this;
          me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
      }, error => {
          console.log(error);
          alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText);
      });
    // lugaresService.getLugares().valueChanges().subscribe(lugares => {
    //   console.log(lugares)
    //   this.lugares = lugares;
    //   // this.lugares = lugares.json();
    // });
  }
}
