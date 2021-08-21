var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, articulo) {
        this.cantidad = cantidad;
        this.articulo = articulo;
    }
    DetalleFactura.prototype.calcularSubTotal = function () {
        this.subtotal = Number(this.cantidad) * Number(this.articulo.precio);
        return this.subtotal;
    };
    return DetalleFactura;
}());
export { DetalleFactura };
