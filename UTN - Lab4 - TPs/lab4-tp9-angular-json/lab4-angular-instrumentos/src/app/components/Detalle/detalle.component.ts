import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Home } from "../Home/home.component";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    providers:[ Home ] //indicamos que Home es padre de Detalle
})
export class Detalle implements OnInit { 

    jsonData:any = {
        cantidadVendida:null, costoEnvio:null, descripcion:null, id:null, imagen:null, instrumento:null,
        marca:null, modelo:null, precio:null
    };

    constructor(
        private home:Home,
        private route:ActivatedRoute
    ) {}

    ngOnInit(): void { 
        this.getDetalle();
    }

    //filtra los datos traidos desde Home con el código de la ruta de la página actual
    getDetalle(){
        let arreglosJson = this.home.getData();
        for(let i=0; i<arreglosJson.length; i++){         
            if(arreglosJson[i].id.toString() === this.route.snapshot.params.codigo){ 
                this.jsonData = arreglosJson[i];
                console.log(this.jsonData)
            }
        }
    }

}