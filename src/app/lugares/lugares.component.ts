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
    // this.lugares = lugaresService.getLugares()
    //   .subscribe(lugares =>{
    //       this.lugares = JSON.parse(lugares._body);
    //       // var self = this;
    //       // self.lugares = Object.keys(self.lugares).map(function (key) { return self.lugares[key]; });
    //   });
    // }
    lugaresService.getLugares().valueChanges().subscribe(lugares => {
      console.log(lugares)
      this.lugares = lugares;
      // this.lugares = lugares.json();
    });
  }
}
