import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { Noticia } from '../models/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  noticia:Noticia;

  constructor(private service: NoticiaService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.service.getOne(params['id']).subscribe(data => {
        this.noticia = data;
        console.log(this.noticia);
      });
    });
  }

}
