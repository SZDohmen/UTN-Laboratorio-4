import { EmpresaService } from './../services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../models/empresa';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  empresas: Empresa[] = [];

  constructor(private service: EmpresaService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe(data => {
      this.empresas = data;
      console.log(this.empresas);
    });
  }

  //Método para agregar una nueva empresa ---------------------------------
  add(id: number): void {
    this.router.navigate(['abmEmpresa/' + id]); //redireccionamos al formulario
  }

}
