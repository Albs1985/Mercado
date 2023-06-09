import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { RecetasComponent } from './pages/recetas/recetas.component';

const app_routes: Routes = [
  { path: 'home', component : InicioComponent},
  { path: 'about', component : AboutComponent},
  { path: 'galeria/:id', component : GaleriaComponent},
  { path: 'recetas/:nom', component : RecetasComponent},
  // { path: 'item/:id', component : ItemComponent},
  // { path: 'search/:termino', component : SearchComponent},  
  // { path: 'videos', component : VideosComponent},
  { path: '**', pathMatch: 'full', redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
