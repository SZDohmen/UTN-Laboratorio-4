import mySQL from './base-conection';
import { Request, Response } from 'express';

class Controlador {

    // Metodo --- GetAll
    async getAll(req:Request, res:Response) {
        try {
            let conexion = await mySQL.connect();
            let data = await conexion.query('SELECT * FROM empleados');
            await res.render('empleados', {empleados : data});
            conexion.release();            
        } catch (error) {
            console.error(error, ": Error al traer lista de empleados");            
        }
    }

    // Metodo --- GetOne
    async getOne(req:Request, res:Response) {
        try {
            let conexion = await mySQL.connect();
            let data = await conexion.query('SELECT * FROM empleados WHERE legajo = ?', req.params.legajo);
            await res.render('empleado', {empleado : data[0]} );
            conexion.release();
        } catch (error) {
            console.error(error, ": Error al traer empleado");
        }
    }

    // Metodo --- Delete
    async delete(req:Request, res:Response) {
        try {
            let conexion = await mySQL.connect();
            await conexion.query('DELETE FROM empleados WHERE legajo = ?', req.params.legajo);
            res.redirect('/empleados');
            conexion.release();
        } catch (error) {
            console.error(error, ": Error al eliminar empleado");
        }        
    }
    
    // Metodo --- New
    async new(req:Request, res:Response){
        res.render('formulario', {opcion: 'New', url:'new', empleado: ''}); // redirecciona al formulario
    }
    // Metodo --- Post
    async post(req:Request, res:Response) {
        try {
            let conexion = await mySQL.connect();
            let query = `INSERT INTO empleados VALUES(${req.body.Legajo},'${req.body.Apellido}','${req.body.Nombre}',${req.body.Dni},'${req.body.Sector}','${req.body.Fecha}',${req.body.Activo})`;
            await conexion.query(query);
            conexion.release();
        } catch (error) {
            console.error(error, ": Error al crear empleado");
        }
        res.redirect('/empleados');
    }

    // Metodo --- Take
    async modificar(req:Request, res:Response){
        try {
            let conexion = await mySQL.connect();
            let data = await conexion.query('SELECT * FROM empleados WHERE legajo = ?',req.params.legajo);
            res.render('formulario', { empleado: data[0], opcion: 'Actualizar', url:'update' });
        } catch (error){
            console.error(error, ": Error al obtener empleado");
        }
    }
    // Metodo --- Update
    async update(req:Request, res:Response) {
        try {
            let conexion = await mySQL.connect();
            let query = `UPDATE empleados SET legajo = ${req.body.Legajo}, apellido = '${req.body.Apellido}', nombre = '${req.body.Nombre}', dni = ${req.body.Dni}, sector = '${req.body.Sector}', fecha_ingreso = '${req.body.Fecha}', activo = ${req.body.Activo} WHERE legajo = ${req.body.Legajo}`;
            let data = await conexion.query(query);
            await conexion.release();                    
        } catch (error) {
            console.error(error, ": Error al actualizar empleado");
        }
        res.redirect('/empleados');   
        
    }

}

const controlador = new Controlador();
export default controlador;