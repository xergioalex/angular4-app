import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('initial', style({
         opacity: 0,
         backgroundColor: 'green',
         transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      state('final', style({
         opacity: 1,
         backgroundColor: 'yellow',
         transform: 'rotate3d(5, 10, 20, 30deg)'
      })),
      transition('initial => final', animate(1000)),
      transition('final => initial', animate(500)),
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'final';

  lat:number = 4.8016199;
  lng:number = -75.6953962;
  lugares = null;

  animar() {
    this.state = (this.state === 'final')? 'initial': 'final';
  }

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
