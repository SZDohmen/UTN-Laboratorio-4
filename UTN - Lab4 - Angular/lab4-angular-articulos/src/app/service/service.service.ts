import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Articulos } from '../model/articulos.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {

    jsonData:Articulos = new Articulos();
    
    constructor(private http:HttpClient){}
        
    getData():Observable<Articulos[]>{
        return this.http.get<Articulos[]>('http://179.43.113.170:8082/test/tc/articulos.json');
    }

}