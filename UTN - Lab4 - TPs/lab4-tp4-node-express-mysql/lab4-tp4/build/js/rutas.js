"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controlador_1 = __importDefault(require("./controlador"));
var Rutas = /** @class */ (function () {
    function Rutas() {
        this.router = express_1.Router();
        this.agregarRutas();
    }
    Rutas.prototype.agregarRutas = function () {
        this.router.get('/empleados', controlador_1.default.getAll);
        this.router.get('/empleado/:legajo', controlador_1.default.getOne);
        this.router.get('/new', controlador_1.default.new);
        this.router.post('/empleado/new', controlador_1.default.post);
        this.router.get('/empleado/:legajo/modificar', controlador_1.default.modificar);
        this.router.post('/empleado/update', controlador_1.default.update);
        this.router.post('/empleado/:legajo/delete', controlador_1.default.delete);
    };
    return Rutas;
}());
var rutas = new Rutas();
exports.default = rutas.router;
