import { Injectable } from '@angular/core';
import jsonData from './instrumentos.json';

@Injectable({ providedIn: 'root' })
export class Service {

    //devuelve lo contenido en el archivo .json
    getData(){
        return jsonData;
    }
}