import { EmpresaService } from './services/empresa.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { IndexComponent } from './index/index.component';
import { DetalleComponent } from './detalle/detalle.component';
import { Error404Component } from './error404/error404.component';
import { AbmNoticiaComponent } from './abm-noticia/abm-noticia.component';
import { AbmEmpresaComponent } from './abm-empresa/abm-empresa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    IndexComponent,
    DetalleComponent,
    Error404Component,
    AbmNoticiaComponent,
    AbmEmpresaComponent,
    OrderByPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    HttpClientModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
