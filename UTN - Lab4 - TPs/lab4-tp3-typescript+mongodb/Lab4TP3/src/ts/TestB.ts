import { Articulo } from "./Articulo.js";
import { Cliente } from "./Cliente.js";
import { DetalleFactura } from "./DetalleFactura.js";
import { Factura, Pago } from "./Factura.js";

export class TestB{
    
    cliente : Cliente;
    articulos : Array<Articulo>;

    inicializarCliente(){
        this.cliente = new Cliente(BigInt(1),"Argentina S.A",BigInt(112321233102));
    }

    inicializarArticulos(){
        this.articulos = new Array<Articulo>(
            new Articulo(BigInt(1),"Marlboro 20 Box", 200.0, "gr"),
            new Articulo(BigInt(2),"Lucky Strike 20", 200.0, "gr"),
            new Articulo(BigInt(3),"Red Point 20", 100.0, "gr"),
            new Articulo(BigInt(4),"Lucky Strike 10", 120.0, "gr"),
            new Articulo(BigInt(5),"Chesterfield 20", 150.0, "gr"),
        );
    }

    inicializarFacturas(){
        this.cliente.facturas = new Array<Factura>(
            new Factura(this.cliente,"E",30,BigInt(1),'S'),
            new Factura(this.cliente,null,10,BigInt(2),'P'),
            new Factura(this.cliente,"R",40,BigInt(3),'D'),
        );
    }

    inicializarDetalleFacturas(){
        this.cliente.facturas[0].detallesFactura = new Array<DetalleFactura>(
            new DetalleFactura(1,this.articulos[0]),
            new DetalleFactura(1,this.articulos[3])
        );

        this.cliente.facturas[1].detallesFactura = new Array<DetalleFactura>(
            new DetalleFactura(1,this.articulos[2]),
            new DetalleFactura(4,this.articulos[4])
        );

        this.cliente.facturas[2].detallesFactura = new Array<DetalleFactura>(
            new DetalleFactura(1,this.articulos[1]),
            new DetalleFactura(1,this.articulos[0])
        );
    }
    
    constructor(){
        this.inicializarCliente();
        this.inicializarArticulos();
        this.inicializarFacturas();
        this.inicializarDetalleFacturas();
    }
}
let pruebaB = new TestB();

let divB = document.getElementById('parteB');
divB.childNodes.item(0).textContent = "Parte B";
//Punto 1
    let puntoB1 = divB.childNodes.item(1);
    puntoB1.textContent = "1) SubTotal de cada factura";
    let ulB1 = puntoB1.appendChild(document.createElement('ul'));

    pruebaB.cliente.facturas.forEach(
        f =>{
            let li1 = ulB1.appendChild(document.createElement('li'));
            li1.textContent = `Factura ${f.numero}`;
            let ul_li1 = li1.appendChild(document.createElement('ul'));
            f.detallesFactura.forEach(dF =>{
                let sub_li = ul_li1.appendChild(document.createElement('li'));
                sub_li.textContent = `${dF.articulo.denominacion} - ${dF.articulo.precio}$ x ${dF.cantidad} = ${dF.calcularSubTotal()}`;
            });
        }
    );
//Punto 2
    let puntoB2 = divB.childNodes.item(3);
    puntoB2.textContent = "2) Total de items";
    let ulB2 = puntoB2.appendChild(document.createElement('ul'));
        pruebaB.cliente.facturas.forEach(
            f =>{
                let li = ulB2.appendChild(document.createElement('li'));
                li.textContent = `Factura ${f.numero} - Total: ${f.calcularTotalItems()}`;
            }
        );
//Punto 3
    let puntoB3 = divB.childNodes.item(5);
    puntoB3.textContent = `3) Calcular total final por cada factura`;
        let ulB3 = puntoB3.appendChild(document.createElement("ul"));
        pruebaB.cliente.facturas.forEach(
            f => {
                let li = ulB3.appendChild(document.createElement('li'));
                li.textContent = `Factura ${f.numero} -> Recargo ${f.recargo}% Total ${f.calcularTotalFinal().toString()}`;
            }
        );
//Punto 4
let puntoB4 = divB.childNodes.item(7).textContent = `4) Total facturado por tipo de pago: ${pruebaB.cliente.totalFacturadoXTipoPago('E')}`;