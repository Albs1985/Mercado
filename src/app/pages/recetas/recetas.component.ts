import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  nomReceta : string = "";

  constructor(private route: ActivatedRoute
    // , public recetasService : RecetasService
    ){
      
    this.route.params
      .subscribe(params => {        
        // console.log(params['nom']);
        this.nomReceta = 'receta'+params['nom'];
        // productosService.cargarProductos(params['id']);
        //TODO CARGAR LAS RECETAS

      });
  }

}
