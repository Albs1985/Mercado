import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  nomCategoria : string = "";

  constructor(private route: ActivatedRoute, public productosService : ProductosService){
    this.route.params
      .subscribe(params => {        
        // console.log(params['id']);
        this.nomCategoria = 'menuCentral.'+params['id'] +'Titulo';
        // console.log(this.nomCategoria);
        productosService.cargarProductos(params['id']);

      });
  }
}
