import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/model/instrumento';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  instrumento: Instrumento = { 
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
      this.instrumento = data;
    });
  }

  detail(){
    this.rout.params.subscribe( data => {
      (data['id'] === '0') ? this.save() : this.update(data['id']);
    });
  }

  save(){
    this.service.save(this.instrumento).subscribe(data => {
      this.instrumento = data;          
    });
    alert('Nuevo instrumento agregado');
    this.router.navigate(['admin/lista-productos']); 
  } 
  
  update(id:number){
    this.service.update(id, this.instrumento).subscribe(data => {
      this.instrumento = data;      
    });
    alert('Datos actualizados');
    this.router.navigate(['admin/lista-productos']);      
  }

  canelar() { this.router.navigate(['admin/lista-productos']); }

}
