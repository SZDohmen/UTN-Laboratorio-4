import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  noticiaBusqueda:Noticia[] = [];
  terminoBusqueda:string= " ";
  allNoticias:Noticia[] =[];

  constructor(private actRoute:ActivatedRoute, private service:NoticiaService,private router:Router) {}

  ngOnInit(): void {
    //console.log(this.actRoute.params)
    this.actRoute.params.subscribe(params=>{
      this.terminoBusqueda = params['termino'];});

    this.service.getAll().subscribe((res: Noticia[]) => {this.allNoticias = res;
           console.log(this.allNoticias.length)
           console.log(this.terminoBusqueda)
           this.filterByTituloOResumen(this.allNoticias,this.terminoBusqueda);
           
           console.log(this.noticiaBusqueda.length)
    });
  }
/*
buscarNoticias(termino:string):Noticia[]{
  let noticiasArr:Noticia[] = [];
  termino = termino.toLowerCase();
  console.log(termino)
  let noticiatest:Noticia;
  this.service.getOne(2).subscribe((res:Noticia)=>{
    noticiatest =res;
  });
  this.filterByTituloOResumen(this.allNoticias,this.terminoBusqueda);
  //console.log(allNoticias[2].id)
  /*
  for(let noticia of this.allNoticias){
    let titulo = noticia.titulo.toLowerCase();
    let resumen = noticia.resumen.toLowerCase();
    if(titulo.indexOf(termino) >= 0 || resumen.indexOf(termino) >= 0){
      noticiasArr.push(noticia);
    }
  }
  return noticiasArr;
}*/

  filterByTituloOResumen(noticias:Array<Noticia>,filtro:string):Noticia[] {
    let counter:number=0;
    for (let index = 0; index < noticias.length; index++) {
      console.log(this.allNoticias.length)
      if(this.allNoticias[index].titulo.includes(filtro) || this.allNoticias[index].resumen.includes(filtro)){
        this.noticiaBusqueda[counter] = this.allNoticias[index];
        counter++;
      }
    }
    return this.noticiaBusqueda;
  }
}
