import { Router } from 'express';
import Controlador from './controlador';

class Rutas {
    router:Router;

    constructor() {
        this.router = Router();
        this.agregarRutas();
    }

    agregarRutas() {
        this.router.get('/empleados', Controlador.getAll);
        this.router.get('/empleado/:legajo',Controlador.getOne);

       
        this.router.get('/new', Controlador.new);
        this.router.post('/empleado/new', Controlador.post);

        this.router.get('/empleado/:legajo/modificar', Controlador.modificar);
        this.router.post('/empleado/update', Controlador.update);

        this.router.post('/empleado/:legajo/delete', Controlador.delete);
        
    }
}

const rutas = new Rutas();
export default rutas.router;