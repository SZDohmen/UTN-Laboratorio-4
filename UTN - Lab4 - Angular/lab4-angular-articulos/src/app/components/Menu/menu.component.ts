import { Component, OnInit } from "@angular/core";
import { Home } from "../Home/home.component";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers: [Home]
})
export class Menu implements OnInit {

    constructor( private home:Home ) {}

    dataFiltrada;

    ngOnInit(): void {}    

    buscadorInput(dataInput) {
        let resultadoFiltrado = [];    
        let value = dataInput.value.toLowerCase();
        console.log(value);
        resultadoFiltrado = this.home.getData().filter( (array) => {
            return array.instrumento.toLowerCase().search(value) !== -1; // return a boolean
        });
        console.log(resultadoFiltrado);
    }
    
}