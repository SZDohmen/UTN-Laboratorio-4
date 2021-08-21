var Pago = /** @class */ (function () {
    function Pago(seleccionado) {
        this.nombre = ['E', 'TD', 'TC', 'CC', 'TR'];
        this.seleccionado = seleccionado;
    }
    Pago.prototype.validar = function () {
        var _this = this;
        var metodoPago = "";
        if (this.seleccionado != null) {
            metodoPago = this.nombre.find(function (m) { return m == _this.seleccionado; });
        }
        return this.seleccionado == null || metodoPago == this.seleccionado;
    };
    return Pago;
}());
export { Pago };
;
var Factura = /** @class */ (function () {
    function Factura(cliente, tipoPago, recargo, numero, letra) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = new Pago(tipoPago);
        this.cliente = cliente;
    }
    Factura.prototype.calcularTotalItems = function () {
        if (this.detallesFactura != null) {
            var totalFactura_1 = new Number('0.0');
            this.detallesFactura.forEach(function (detalle) {
                totalFactura_1 = Number(totalFactura_1) + Number(detalle.calcularSubTotal());
            });
            return totalFactura_1;
        }
        return null;
    };
    Factura.prototype.calcularTotalFinal = function () {
        var total = this.calcularTotalItems();
        return Number(total) + Number(total) * Number(this.recargo) / 100;
    };
    return Factura;
}());
export { Factura };
