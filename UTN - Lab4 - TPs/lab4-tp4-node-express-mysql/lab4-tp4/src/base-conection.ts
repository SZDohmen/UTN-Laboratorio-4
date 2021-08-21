import promise from 'promise-mysql';
import config from './base-config.js';

// Clase de conexion con la base de datos usando los datos importados de 'config'
class MySQL {
    pool : promise.Pool;

    constructor() {
        this.crearPool();
    }

    private async crearPool() {
        this.pool = await promise.createPool(config);
    }

    async connect() {
        return this.pool.getConnection();
    }
}

const mySQL = new MySQL();
export default mySQL;