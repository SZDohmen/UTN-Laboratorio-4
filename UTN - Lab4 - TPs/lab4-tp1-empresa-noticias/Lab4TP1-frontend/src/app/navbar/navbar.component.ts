import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {    
  }

  buscarNoticias(textoBusqueda:string){
    if(textoBusqueda == '')textoBusqueda=' ';
      this.router.navigate(['/buscador', textoBusqueda]);
      setTimeout(function(){location.reload()}, 200); 
  }
}
