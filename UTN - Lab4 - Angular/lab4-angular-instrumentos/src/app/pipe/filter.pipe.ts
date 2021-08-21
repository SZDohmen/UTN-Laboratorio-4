import { Pipe, PipeTransform } from '@angular/core';
import { Instrumento } from '../model/instrumento';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(instrumentos: Instrumento[], texto: string): Instrumento[] {

        if (texto.length === 0) {
            return instrumentos;
        }
        texto = texto.toLocaleLowerCase();
        return instrumentos.filter(
            instrumento => {
                return instrumento.instrumento.toLocaleLowerCase().includes(texto);
            }
        );
    }
}