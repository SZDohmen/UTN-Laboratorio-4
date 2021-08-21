import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmEmpresaComponent } from './abm-empresa/abm-empresa.component';
import { AbmNoticiaComponent } from './abm-noticia/abm-noticia.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetalleComponent } from './detalle/detalle.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'buscador/:termino', component: BuscadorComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'abmNoticia/:id', component: AbmNoticiaComponent},
  {path: 'abmEmpresa/:id', component: AbmEmpresaComponent},
  {path: '**', component: Error404Component}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
