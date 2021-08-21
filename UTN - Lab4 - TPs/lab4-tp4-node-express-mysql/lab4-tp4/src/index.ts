import Express, { Application } from 'express';
import rutas from './rutas';
import path from 'path';

class Index {
    app: Application;

    constructor() {
        this.app = Express();
        this.app.listen(3000); //puerto del localhost
       
        this.app.set('view engine', 'ejs'); // especifica motor predeterminado y extension
        this.app.set('views', path.resolve('build/views')); // redirige a las vistas dentro de la carpeta build
        
        this.app.use(Express.json()); // transforma los datos a json
        this.app.use(Express.urlencoded({ extended: true })); // transforma datos de un formulario html a json
        this.addRoutes();
    }

    addRoutes() {
        this.app.use(rutas);
        this.app.get('/', (req,res) => {
            res.render('index');
        })
    }
    
}

const aplicacion = new Index();