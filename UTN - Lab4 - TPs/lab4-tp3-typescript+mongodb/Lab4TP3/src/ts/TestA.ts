console.log("parteA")
import { HojaRuta } from './HojaRuta.js';
import { Detalle } from './Detalle.js';
import { Vehiculo } from './Vehiculo.js';

export class TestA {
    //Declaramos las variables
    vehiculo: Vehiculo;
    hojaRuta1; hojaRuta2; hojaRuta3: HojaRuta;
    detalle1A; detalle1B; detalle1C: Detalle;
    detalle2A; detalle2B; detalle2C: Detalle;
    detalle3A; detalle3B; detalle3C: Detalle;

    constructor() {
        //Inicializamos las variables
        this.vehiculo = new Vehiculo();

        this.hojaRuta1 = new HojaRuta();
        this.hojaRuta2 = new HojaRuta();
        this.hojaRuta3 = new HojaRuta();

        this.detalle1A = new Detalle();
        this.detalle1B = new Detalle();
        this.detalle1C = new Detalle();

        this.detalle2A = new Detalle();
        this.detalle2B = new Detalle();
        this.detalle2C = new Detalle();

        this.detalle3A = new Detalle();
        this.detalle3B = new Detalle();
        this.detalle3C = new Detalle();
    }


    setValoresDetalles() {
        //Seteamos valores para el detalle 1A
        this.detalle1A.kmSalida = 0;
        this.detalle1A.kmRegreso = 27;
        this.detalle1A.horaSalida = 13;
        this.detalle1A.horaRegreso = 13;
        this.detalle1A.minutoSalida = 15;
        this.detalle1A.minutoRegreso = 45;

        //Seteamos valores para el detalle 1B
        this.detalle1B.kmSalida = 27;
        this.detalle1B.kmRegreso = 40;
        this.detalle1B.horaSalida = 14;
        this.detalle1B.horaRegreso = 14;
        this.detalle1B.minutoSalida = 0;
        this.detalle1B.minutoRegreso = 30;

        //Seteamos valores para el detalle 1C
        this.detalle1C.kmSalida = 40;
        this.detalle1C.kmRegreso = 50;
        this.detalle1C.horaSalida = 15;
        this.detalle1C.horaRegreso = 15;
        this.detalle1C.minutoSalida = 0;
        this.detalle1C.minutoRegreso = 20;

        //Seteamos valores para el detalle 2A
        this.detalle2A.kmSalida = 50;
        this.detalle2A.kmRegreso = 100;
        this.detalle2A.horaSalida = 17;
        this.detalle2A.horaRegreso = 18;
        this.detalle2A.minutoSalida = 20;
        this.detalle2A.minutoRegreso = 10;

        //Seteamos valores para el detalle 2B
        this.detalle2B.kmSalida = 100;
        this.detalle2B.kmRegreso = 130;
        this.detalle2B.horaSalida = 12;
        this.detalle2B.horaRegreso = 12;
        this.detalle2B.minutoSalida = 15;
        this.detalle2B.minutoRegreso = 50;

        //Seteamos valores para el detalle 2C
        this.detalle2C.kmSalida = 130;
        this.detalle2C.kmRegreso = 150;
        this.detalle2C.horaSalida = 13;
        this.detalle2C.horaRegreso = 14;
        this.detalle2C.minutoSalida = 30;
        this.detalle2C.minutoRegreso = 0;

        //Seteamos valores para el detalle 3A
        this.detalle3A.kmSalida = 150;
        this.detalle3A.kmRegreso = 165;
        this.detalle3A.horaSalida = 19;
        this.detalle3A.horaRegreso = 19;
        this.detalle3A.minutoSalida = 15;
        this.detalle3A.minutoRegreso = 40;

        //Seteamos valores para el detalle 3B
        this.detalle3B.kmSalida = 165;
        this.detalle3B.kmRegreso = 180;
        this.detalle3B.horaSalida = 21;
        this.detalle3B.horaRegreso = 21;
        this.detalle3B.minutoSalida = 20;
        this.detalle3B.minutoRegreso = 45;

        //Seteamos valores para el detalle 3C
        this.detalle3C.kmSalida = 180;
        this.detalle3C.kmRegreso = 190;
        this.detalle3C.horaSalida = 22;
        this.detalle3C.horaRegreso = 23;
        this.detalle3C.minutoSalida = 50;
        this.detalle3C.minutoRegreso = 15;

    }


    setValoresHojasRuta() {
        //Seteamos valores para la hoja de ruta 1
        this.hojaRuta1.fecha = new Date("2021-03-10");
        this.hojaRuta1.numero = 1;
        this.hojaRuta1.detalles.push(this.detalle1A);
        this.hojaRuta1.detalles.push(this.detalle1B);
        this.hojaRuta1.detalles.push(this.detalle1C);

        //Seteamos valores para la hoja de ruta 2
        this.hojaRuta2.fecha = new Date("2021-03-15");
        this.hojaRuta2.numero = 2;
        this.hojaRuta2.detalles.push(this.detalle2A);
        this.hojaRuta2.detalles.push(this.detalle2B);
        this.hojaRuta2.detalles.push(this.detalle2C);

        //Seteamos valores para la hoja de ruta 3
        this.hojaRuta3.fecha = new Date("2021-03-16");
        this.hojaRuta3.numero = 3;
        this.hojaRuta3.detalles.push(this.detalle3A);
        this.hojaRuta3.detalles.push(this.detalle3B);
        this.hojaRuta3.detalles.push(this.detalle3C);
    }

    setValoresVehiculo() {
        //Seteamos valores para el vehículo
        this.vehiculo.patente = "KFF 456";
        this.vehiculo.marca = "Volkswagen";
        this.vehiculo.modelo = "Gol";
        this.vehiculo.hojasRuta.push(this.hojaRuta1);
        this.vehiculo.hojasRuta.push(this.hojaRuta2);
        this.vehiculo.hojasRuta.push(this.hojaRuta3);
    }


    probarMetodos() {
        let divA = document.getElementById('parteA');
        divA.childNodes.item(0).textContent = "Parte A";

        //Punto 1
        let totalKmH1 = this.hojaRuta1.calcularTotalKm();
        let puntoA1 = divA.childNodes.item(1);
            puntoA1.textContent = `1) Total de kilometros por hoja de ruta 1`;
                let puntoA1_ul = puntoA1.appendChild(document.createElement('ul'));
                let puntoA1_li = puntoA1_ul.appendChild(document.createElement('li'));
                puntoA1_li.textContent = `${totalKmH1} km.`;
        let fechaDesde = new Date("2021-03-13");
        let fechaHasta = new Date("2021-03-17");
        let totalKmVehiculo = this.vehiculo.calcularTotalKmRecorridos(fechaDesde, fechaHasta);
        //Punto 2
            let puntoA2 = divA.childNodes.item(3);
            puntoA2.textContent = "El total de km recorridos por el vehículo";
                let puntoA2_ul = puntoA2.appendChild(document.createElement('ul'))
                let puntoA2_li = puntoA2_ul.appendChild(document.createElement('li'));
                puntoA2_li.textContent = `${this.vehiculo.marca} ${this.vehiculo.modelo} de patente ${this.vehiculo.patente}
                entre los días ${fechaDesde.toDateString()} y ${fechaHasta.toDateString()} es ${totalKmVehiculo} km.`;
    }
}

let prueba = new TestA();
prueba.setValoresDetalles();
prueba.setValoresHojasRuta();
prueba.setValoresVehiculo();
prueba.probarMetodos();