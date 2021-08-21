import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/model/instrumento';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  filterPost = '';
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
    });
  }

  detail(id:number){
    this.router.navigate(['catalogo/'+ id]);
  }

}
