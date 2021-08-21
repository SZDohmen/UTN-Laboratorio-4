var HojaRuta = /** @class */ (function () {
    function HojaRuta() {
        this.fecha = new Date();
        this.numero = 0;
        this.detalles = [];
    }
    HojaRuta.prototype.calcularTotalKm = function () {
        var totalKilometros;
        totalKilometros = 0;
        for (var _i = 0, _a = this.detalles; _i < _a.length; _i++) {
            var d = _a[_i];
            totalKilometros = totalKilometros + d.kmRegreso - d.kmSalida;
        }
        return totalKilometros;
    };
    return HojaRuta;
}());
export { HojaRuta };
