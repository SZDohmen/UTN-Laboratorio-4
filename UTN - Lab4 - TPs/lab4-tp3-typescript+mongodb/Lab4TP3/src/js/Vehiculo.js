var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.patente = "";
        this.marca = "";
        this.modelo = "";
        this.hojasRuta = [];
    }
    Vehiculo.prototype.calcularTotalKmRecorridos = function (fechaDesde, fechaHasta) {
        var totalKmRecorridos = 0;
        for (var _i = 0, _a = this.hojasRuta; _i < _a.length; _i++) {
            var hr = _a[_i];
            if (hr.fecha <= fechaHasta && hr.fecha >= fechaDesde) {
                totalKmRecorridos = totalKmRecorridos + hr.calcularTotalKm();
            }
        }
        return totalKmRecorridos;
    };
    return Vehiculo;
}());
export { Vehiculo };
