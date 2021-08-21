import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/model/instrumento';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  instrumento: Instrumento[] = [];

  constructor(
    private service: Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe( data => {
      this.instrumento = data;
      console.log(this.instrumento);
    });
  }

  detail(id:number){    
    this.router.navigate(['admin/detalle-producto/'+ id]);
  }
 

  delete(id:number){
    const opcion = confirm('¿Eliminar registro?');
    if(opcion === true){
      this.service.delete(id).subscribe( data => { });      
    }
    alert('Registro eliminado');
    location.reload();
  }




}
