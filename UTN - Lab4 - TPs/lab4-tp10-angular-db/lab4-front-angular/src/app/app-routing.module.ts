import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './admin/detalle/detalle.component';
import { ListaComponent } from './admin/lista/lista.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'donde-estamos', component: MapaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'catalogo/:id', component: ArticuloComponent },

  { path: 'admin/lista-productos', component: ListaComponent },
  { path: 'admin/detalle-producto/:id', component: DetalleComponent},

  { path:'*', pathMatch:'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
