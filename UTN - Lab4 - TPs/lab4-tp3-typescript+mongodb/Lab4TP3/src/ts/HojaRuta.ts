import { Vehiculo } from './Vehiculo.js';
import { Detalle } from './Detalle.js';

export class HojaRuta {
    fecha: Date;
    numero: number;
    detalles: Detalle[];

    constructor() {
        this.fecha = new Date();
        this.numero = 0;
        this.detalles = [];
    }

    calcularTotalKm(): number {
        let totalKilometros: number;
        totalKilometros = 0;

        for(let d of this.detalles) {
            totalKilometros = totalKilometros + d.kmRegreso - d.kmSalida;
        }

        return totalKilometros;
    }
}