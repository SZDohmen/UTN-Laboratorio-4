import { HojaRuta } from './HojaRuta.js';
export class Detalle {
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;
    hojaRuta: HojaRuta;

    constructor() {
        this.kmSalida = 0;
        this.kmRegreso = 0;
        this.horaSalida = 0;
        this.horaRegreso = 0;
        this.minutoSalida = 0;
        this.minutoRegreso = 0;
        this.hojaRuta = new HojaRuta();
    }
}