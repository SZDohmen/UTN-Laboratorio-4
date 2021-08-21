export class Articulo{

    codigo : BigInt;
    denominacion: String;
    precio: Number;
    unidadMedida: String;
    
    constructor(codigo: BigInt, denominacion: String, precio: Number, unidadMedida: String){
        this.codigo = codigo ;  
        this.denominacion = denominacion; 
        this.precio = precio; 
        this.unidadMedida = unidadMedida; 
    }
    
}