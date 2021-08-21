import { Pipe, PipeTransform } from '@angular/core';
import { Articulos } from '../model/articulos.model';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(articulos: Articulos[], texto: string): Articulos[] {

        if (texto.length === 0) {
            return articulos;
        }
        texto = texto.toLocaleLowerCase();
        return articulos.filter(
            articulo => {
                return articulo.articulo.toLocaleLowerCase().includes(texto);
            }
        );
    }
}