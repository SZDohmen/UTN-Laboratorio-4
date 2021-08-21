import {Cliente} from "./Cliente.js";
import {DetalleFactura} from "./DetalleFactura.js";

export class Pago {
    nombre : string[] = ['E','TD','TC','CC','TR'];
    seleccionado : String;

    validar() : Boolean{
        let metodoPago = "";
        if(this.seleccionado != null){
            metodoPago = this.nombre.find(m => m == this.seleccionado);
        } 
        return this.seleccionado == null || metodoPago == this.seleccionado; 
    }
    constructor(seleccionado : String){
        this.seleccionado = seleccionado;
    }
};

export class Factura{
    letra : String;
    numero : bigint;
    recargo : Number;
    tipoPago : Pago;
    totalItems : Number;
    fecha : Date;
    cliente : Cliente;
    detallesFactura: Array<DetalleFactura>;

    constructor(cliente: Cliente, tipoPago: String, recargo: Number, numero: bigint, letra: String){
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = new Pago(tipoPago);
        this.cliente = cliente;
    }

    calcularTotalItems() : Number{
        if(this.detallesFactura != null){
             let totalFactura : Number = new Number('0.0');
             this.detallesFactura.forEach(
                (detalle) =>{
                    totalFactura = Number(totalFactura) + Number(detalle.calcularSubTotal());
                }
            );
            return totalFactura;
        }
        return null;
    }

    calcularTotalFinal() : Number{
        let total = this.calcularTotalItems();
        return Number(total) + Number(total) * Number(this.recargo) / 100;
    }
}