import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './admin/lista/lista.component';
import { DetalleComponent } from './admin/detalle/detalle.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { Service } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './components/pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    HomeComponent,
    CatalogoComponent,
    ArticuloComponent,
    MapaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
