import { Noticia } from './../models/noticia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  miUrl: string = 'http://localhost:9000/api/v1/noticias/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.miUrl);
  }

  getOne(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(this.miUrl + id);
  }

  post(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.miUrl, noticia);
  }

  put(id: number, noticia: Noticia): Observable<Noticia> {
    return this.http.put<Noticia>(this.miUrl + id, noticia);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(this.miUrl + id);
  }

}
