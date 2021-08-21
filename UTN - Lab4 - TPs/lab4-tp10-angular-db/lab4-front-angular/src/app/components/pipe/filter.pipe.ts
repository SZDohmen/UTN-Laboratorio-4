import { Pipe, PipeTransform } from '@angular/core';
import { Instrumento } from 'src/app/model/instrumento';

@Pipe( {name: 'filter'} )

export class FilterPipe implements PipeTransform {
    transform(instrumento: Instrumento[], texto: string): Instrumento[] {

        if (texto.length === 0) {
            return instrumento;
        }
        texto = texto.toLocaleLowerCase();
        return instrumento.filter(
            instrumento => {
                return instrumento.nombre.toLocaleLowerCase().includes(texto);
            }
        );
    }
}
