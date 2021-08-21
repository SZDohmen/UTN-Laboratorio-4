import {Factura} from "./Factura.js";

export class Cliente{

    numero : bigint;
    razonSocial : String;
    cuit : bigint;

    facturas : Array<Factura>;
    
    constructor(numero: bigint, razonSocial : String, cuit : bigint){
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.facturas = new Array();
    }

    totalFacturadoXTipoPago(tipoPago : String) : Number{
        let totalFacturado = 0.0;
        this.facturas.forEach(factura => {
            if(factura.tipoPago.validar() || tipoPago == factura.tipoPago.seleccionado){        
                totalFacturado+=Number(factura.calcularTotalFinal());
            }
        });
        return totalFacturado;
    }
    
}