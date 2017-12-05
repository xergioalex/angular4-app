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
    this.lugares = lugaresService.getLugares();
  }
}
