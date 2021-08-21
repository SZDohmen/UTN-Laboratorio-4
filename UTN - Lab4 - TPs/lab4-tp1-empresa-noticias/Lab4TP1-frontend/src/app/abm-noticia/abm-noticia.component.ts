import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from './../models/noticia';
import { Component, Input, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Empresa } from '../models/empresa';
import tinymce from 'dist/Lab4TP1-frontend/tinymce/tinymce';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-abm-noticia',
  templateUrl: './abm-noticia.component.html',
  styleUrls: ['./abm-noticia.component.css']
})

export class AbmNoticiaComponent implements OnInit {
  @Input() empresaId:number;
  tinymce:any = "";
  

noticia: Noticia = {
    id: null,
    titulo: null,
    resumen: null,
    imagen: null,
    contenidoHTML: null,
    publicada: null,
    fechaPublicacion: null,
    empresa: null
  }
today = new Date();



  constructor(private service: NoticiaService, private rutaActiva: ActivatedRoute, private router: Router, private serviceEmp: EmpresaService) { }

  //Método que se ejecuta cuando se inicia el componente ------------------
  ngOnInit() {
    this.rutaActiva.params.subscribe(data => {
      if(data['id'] != '0') { //si tiene un id, obtiene los datos de esa noticia
        this.getOne(data['id']);
      }
    });
    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      selector: "textarea#editor",
    })
  }

  
  //Método para obtener los datos de una noticia --------------------------
  getOne(id: number) {
    this.service.getOne(id).subscribe(data => {
      this.noticia = data;
    });
  }

  //Método para guardar los datos -----------------------------------------
  save() {
    this.noticia.contenidoHTML=tinymce.get("editor").getContent();
    this.rutaActiva.params.subscribe(data => {
      //.validate();
      if(data['id'] === '0') { //si es una nueva noticia la agrega sin publicarla
        this.add();

      } else {
        this.update(data['id']); //si es una noticia existente, la actualiza
      }
    });
  }
  publish(){
    this.noticia.publicada=true;
    this.noticia.fechaPublicacion=this.today;
    console.log(tinymce.get("editor").getContent())
    this.noticia.contenidoHTML=tinymce.get("editor").getContent();
    this.serviceEmp.getOne(1).subscribe(emp => this.noticia.empresa = emp);
    this.rutaActiva.params.subscribe(data => {
      //.validate();
      if(data['id'] === '0') { //si es una nueva noticia la agrega y la publica
        this.add();
      } else {
        this.update(data['id']); //si es una noticia existente, la actualiza
      }
    });
  }

  //Método para agregar una nueva noticia ---------------------------------
  add() {
    this.service.post(this.noticia).subscribe(data => {
      this.noticia = data;
      this.router.navigate(['home/' + this.noticia.empresa.id]);
    });
  }

  //Método para actualizar datos ------------------------------------------
  update(id: number) {
    this.service.put(id, this.noticia).subscribe(data => {
      this.noticia = data;
      this.router.navigate(['detalle/' + id]);
    });
  }

  //Método para cancelar --------------------------------------------------
  cancel() {
    this.router.navigate(['home/' + this.noticia.empresa.id]); //redireccionamos a la tabla
  }
}
