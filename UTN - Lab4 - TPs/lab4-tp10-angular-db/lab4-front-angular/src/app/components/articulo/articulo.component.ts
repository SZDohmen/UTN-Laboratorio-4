import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/model/instrumento';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  i: Instrumento = { 
    id:null,
    nombre:null,
    marca:null,
    imagen:null,
    precio:null,
    costoEnvio:null,
    cantVendida:null,
    descripcion:null,
  }

  constructor(
    private service: Service,
    private rout: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rout.params.subscribe(data => {
      if(data['id'] != '0'){
        this.getOne(data['id']);
      }
    });
  }

  getOne(id:number){
    this.service.getOne(id).subscribe( data => {
      this.i = data;
    });
  }

  volver() { this.router.navigate(['catalogo']); }

}
