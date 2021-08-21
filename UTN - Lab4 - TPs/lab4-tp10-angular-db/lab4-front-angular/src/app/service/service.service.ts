import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrumento } from '../model/instrumento';

@Injectable( {providedIn:'root'} )

export class Service {
    instrumento: Instrumento = new Instrumento();
    url='http://localhost:8080/lab4-back/instrumentos/';

    constructor(private http:HttpClient){}

    getAll():Observable<Instrumento[]> {
        return this.http.get<Instrumento[]>(this.url);
    }

    getOne(id:number):Observable<Instrumento> {
        return this.http.get<Instrumento>(this.url+id);
    }

    save(instrumento:Instrumento):Observable<Instrumento> {
        return this.http.post<Instrumento>(this.url, instrumento);
    }

    update(id:number, instrumento:Instrumento):Observable<Instrumento> {
        return this.http.put<Instrumento>(this.url+id, instrumento);
    }

    delete(id:number):Observable<Instrumento> {
        return this.http.delete<Instrumento>(this.url+id);
    }
}
