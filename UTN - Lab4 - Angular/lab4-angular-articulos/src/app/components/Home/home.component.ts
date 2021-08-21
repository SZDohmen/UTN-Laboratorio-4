import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Service } from "src/app/service/service.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class Home implements OnInit {

    datosArray:any;
    datosFiltrados:any;

    //variable para pipe
    filterPost = '';

    constructor(
        private router:Router,
        private service:Service,
    ) {}

    ngOnInit(): void {       
        this.getData();        
    }

    //trae los datos desde el Service
    getData(){
        this.service.getData().subscribe( data => {
            this.datosArray = data;
        });
        this.datosFiltrados = this.datosArray;
        return this.datosFiltrados;
    }

    //redirecciona a la página de Detalle
    detalle(codigo){
        this.router.navigate(['detalle/'+codigo]);        
    }

    buscadorInput(dataInput){ //filtro que funciona
        let resultadoFiltrado = [];    
        let value = dataInput.value.toLowerCase();
        console.log(value);
        resultadoFiltrado = this.getData().filter( (array) => {
            return array.instrumento.toLowerCase().search(value) !== -1; // return a boolean
        });
        console.log(resultadoFiltrado);
        this.datosFiltrados = resultadoFiltrado;
    }

}