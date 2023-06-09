import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto : Producto = {
    categoria: '',
    cod: '',
    url: ''
  }
  productosLista : Producto[] = [];

  constructor(private http: HttpClient,
    private translate: TranslateService) { 

      // this.cargarProductos();

  }

  cargarProductos(id_category : string){

    // console.log('ProductosService '+id_category);

    //Añadimos el PROMISE para esperar a que se carguen los productos
    // return new Promise( (resolve, reject) => {
      
    return this.http.get("assets/data/productos.json")
        .subscribe( (response: any ) => {

          var array = [];
          for(let key in response){
            this.producto = {     
              categoria: '',
              cod : '',              
              url: ''
            };
            this.producto.categoria = response[key].categoria;
            this.producto.cod = response[key].cod;
            this.producto.url = response[key].url;
            
            // console.log(this.producto);

            if (id_category.indexOf(this.producto.categoria) >=0){
              array.push(this.producto);
            }
                        
          } 
          
          this.productosLista = array;
          this.cargando = false;
          // console.log(this.productosLista);
          // resolve(this.productosLista);
          
        });
      
    // });
    
  }


  // this.productosFiltrado = [];
  //   const terminoLower = termino.toLocaleLowerCase();
  //   this.productos.forEach(prod => {
      
  //     const tituloLower = prod.titulo.toLocaleLowerCase();
  //     const catergoriaLower = prod.categoria.toLocaleLowerCase();

  //     if (catergoriaLower.indexOf(terminoLower) >=0 || tituloLower.indexOf(terminoLower) >=0){
  //       this.productosFiltrado.push(prod);
  //     }
  //   });

}
