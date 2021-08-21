import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from './../models/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-abm-empresa',
  templateUrl: './abm-empresa.component.html',
  styleUrls: ['./abm-empresa.component.css']
})
export class AbmEmpresaComponent implements OnInit {

  empresa: Empresa = {
    id: null,
    denominacion: null,
    telefono: null,
    horarioAtencion: null,
    quienesSomos: null,
    latitud: null,
    longitud: null,
    domicilio: null,
    email: null
  }

  constructor(private service: EmpresaService, private rutaActiva: ActivatedRoute, private router: Router) { }

  //Método que se ejecuta cuando se inicia el componente ------------------
  ngOnInit() {
    this.rutaActiva.params.subscribe(data => {
      if(data['id'] != '0') { //si tiene un id, obtiene los datos de esa empresa
        this.getOne(data['id']);
      }
    });
  }

  
  //Método para obtener los datos de una empresa --------------------------
  getOne(id: number) {
    this.service.getOne(id).subscribe(data => {
      this.empresa = data;
    });
  }

  //Método para guardar los datos -----------------------------------------
  save() {
    this.rutaActiva.params.subscribe(data => {
      this.validate();
      if(data['id'] === '0') { //si es una nueva empresa la agrega
        this.add();
      } else {
        this.update(data['id']); //si es una empresa existente, la actualiza
      }
    });
  }

  //Método para agregar una nueva empresa ---------------------------------
  add() {
    this.service.post(this.empresa).subscribe(data => {
      this.empresa = data;
      this.router.navigate(['']);
    });
  }

  //Método para actualizar datos ------------------------------------------
  update(id: number) {
    this.service.put(id, this.empresa).subscribe(data => {
      this.empresa = data;
      this.router.navigate(['']);
    });
  }

  //Método para cancelar --------------------------------------------------
  cancel() {
    this.router.navigate(['']); //redireccionamos a la tabla
  }

  //Método para validar los datos -----------------------------------------
  validate() {
    var denominacion, telefono, horarioAtencion, quienesSomos, latitud, longitud, domicilio, email, coordenadas;

    denominacion = (<HTMLInputElement> document.getElementById("denominacion")).value.toLowerCase().trim();
    telefono = (<HTMLInputElement> document.getElementById("telefono")).value.toLowerCase().trim();
    horarioAtencion = (<HTMLInputElement> document.getElementById("horarioAtencion")).value.toLowerCase().trim();
    quienesSomos = (<HTMLInputElement> document.getElementById("quienesSomos")).value.toLowerCase().trim();
    latitud = (<HTMLInputElement> document.getElementById("latitud")).value.toString().trim();
    longitud = (<HTMLInputElement> document.getElementById("longitud")).value.toString().trim();
    domicilio = (<HTMLInputElement> document.getElementById("domicilio")).value.toLowerCase().trim();
    email = (<HTMLInputElement> document.getElementById("email")).value.toLowerCase().trim();

    coordenadas = "-.0123456789";

    if(denominacion === "") { //comprobamos que la denominación no sea vacía
      alert('El campo denominación es obligatorio.');
      return false;
    
    } else if(denominacion.length > 128) {  //comprobamos que la longitud de los campos no sea mayor a la requerida
      alert('La denominación no puede tener más de 128 caracteres.');
      return false;

    } else if(telefono.length > 50) { 
      alert('El teléfono no puede tener más de 50 caracteres.');
      return false;
      
    } else if(horarioAtencion.length > 256 || domicilio.length > 256) { 
      alert('El horario de atención y el domicilio no pueden tener más de 256 caracteres.');
      return false;

    } else if(quienesSomos.length > 1024) {
      alert('"Quiénes somos" no puede tener más de 1024 caracteres.');
      return false;
    
    } else if(email.length > 75 || !this.validarEmail(email)) { //validamos la longitud del email y el formato
      alert('El email ingresado no es válido');
      return false;
    }

    for(var i = 0; i < latitud.length; i++) {
      if(!(coordenadas.indexOf(latitud.charAt(i),0) != -1)) { //comprobamos que la latitud sea válida
        alert('Ingrese una latitud válida.');
        return false;
      }
    }

    for(var i = 0; i < longitud.length; i++) {
      if(!(coordenadas.indexOf(longitud.charAt(i),0) != -1)) { //comprobamos que la longitud sea válida
        alert('Ingrese una longitud válida.');
        return false;
      }
    }

  }

  validarEmail(emailValidar) {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (expr.test(emailValidar)) { //comprobamos que el email cumpla con el formato
     return true;
    }
  }

}
