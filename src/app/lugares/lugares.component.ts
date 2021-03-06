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
         // backgroundColor: 'green',
         // transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      state('final', style({
         opacity: 1,
         // backgroundColor: 'yellow',
         // transform: 'rotate3d(5, 10, 20, 30deg)'
      })),
      transition('initial => final', animate(2000)),
      transition('final => initial', animate(1000)),
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'initial';

  lat:number = 4.8016199;
  lng:number = -75.6953962;
  lugares = null;

  animar() {
    this.state = (this.state === 'final')? 'initial': 'final';
  }
  animationInit(e) {
    console.log('Init');
    console.log(e);
  }
  animationEnd(e) {
    console.log('Done');
    console.log(e);
  }

  constructor(private lugaresService: LugaresService) {
     // lugaresService.getLugares()
     //  .subscribe(lugares =>{
     //      this.lugares = lugares;
     //      var self = this;
     //      self.lugares = Object.keys(self.lugares).map(function (key) { return self.lugares[key]; });
     //      this.state = 'final';
     //  }, error => {
     //      console.log(error);
     //      alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText);
     //  });
    lugaresService.getLugares().valueChanges().subscribe(lugares => {
      console.log(lugares)
      this.lugares = lugares;
      // this.lugares = lugares.json();
    });
  }
}
