import { HojaRuta } from "./HojaRuta.js";

export class Vehiculo{
    patente: string;
    marca: string;
    modelo: string;
    hojasRuta: HojaRuta[];

    constructor() {
        this.patente = "";
        this.marca = "";
        this.modelo = "";
        this.hojasRuta = [];
    }

    calcularTotalKmRecorridos(fechaDesde: Date, fechaHasta: Date): number {
        let totalKmRecorridos: number = 0;

        for(let hr of this.hojasRuta) {
            if(hr.fecha <= fechaHasta && hr.fecha >= fechaDesde) {
                totalKmRecorridos = totalKmRecorridos + hr.calcularTotalKm();
            }
        }

        return totalKmRecorridos;
    }
}