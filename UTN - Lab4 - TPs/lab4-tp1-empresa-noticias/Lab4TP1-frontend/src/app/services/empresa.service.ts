import { Empresa } from './../models/empresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  miUrl: string = 'http://localhost:9000/api/v1/empresas/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.miUrl);
  }

  getOne(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.miUrl + id);
  }

  post(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.miUrl, empresa);
  }

  put(id: number, empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.miUrl + id, empresa);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(this.miUrl + id);
  }

}
