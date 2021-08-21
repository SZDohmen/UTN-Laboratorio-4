var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit) {
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.facturas = new Array();
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var totalFacturado = 0.0;
        this.facturas.forEach(function (factura) {
            if (factura.tipoPago.validar() || tipoPago == factura.tipoPago.seleccionado) {
                totalFacturado += Number(factura.calcularTotalFinal());
            }
        });
        return totalFacturado;
    };
    return Cliente;
}());
export { Cliente };
