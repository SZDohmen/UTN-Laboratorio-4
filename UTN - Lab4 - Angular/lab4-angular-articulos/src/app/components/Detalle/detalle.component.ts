import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Articulos } from "src/app/model/articulos.model";
import { Service } from "src/app/service/service.service";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class Detalle implements OnInit { 

    jsonData:Articulos = {
        articulo:null, codigo:null, rubro:null, foto:null, esPromocion:null, fechaVencimiento:null,
        preciosRelevados:[]
    };

    constructor(
        private service:Service,
        private route:ActivatedRoute
    ) {}

    ngOnInit(): void { 
        this.getDetalle();
    }

    //filtra los datos traidos desde Home con el código de la ruta de la página actual
    getDetalle(){
        this.service.getData().subscribe( arreglosJson => {
            for(let i=0; i<arreglosJson.length; i++){         
                if(arreglosJson[i].codigo.toString() === this.route.snapshot.params.codigo){ 
                    this.jsonData = arreglosJson[i];
                    //console.log(this.jsonData)
                }
            }
        })
    }

    promedio(data) {
        let prom = 0, suma = 0;
        for (let i = 0; i < data.length; i++) {
            suma = data[i] + suma;
        }
        prom = suma / data.length;
        return prom;
    }

}