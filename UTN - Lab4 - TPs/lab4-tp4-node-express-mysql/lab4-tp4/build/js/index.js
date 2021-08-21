"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rutas_1 = __importDefault(require("./rutas"));
var path_1 = __importDefault(require("path"));
var Index = /** @class */ (function () {
    function Index() {
        this.app = express_1.default();
        this.app.listen(3000); //puerto del localhost
        this.app.set('view engine', 'ejs'); // especifica motor predeterminado y extension
        this.app.set('views', path_1.default.resolve('build/views')); // redirige a las vistas dentro de la carpeta build
        this.app.use(express_1.default.json()); // transforma los datos a json
        this.app.use(express_1.default.urlencoded({ extended: true })); // transforma datos de un formulario html a json
        this.addRoutes();
    }
    Index.prototype.addRoutes = function () {
        this.app.use(rutas_1.default);
        this.app.get('/', function (req, res) {
            res.render('index');
        });
    };
    return Index;
}());
var aplicacion = new Index();
