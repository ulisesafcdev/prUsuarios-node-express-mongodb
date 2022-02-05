// creamos un objeto vacio
const controller = { };
const connection = require('../connection/connection');
const listadoModel = require('../models/listado.model');

// creamos la peticion al servidor y enviamos un mensaje cuando se conecte
controller.index = async (req, res) => {
    // res.send('Conexion exitosa al servidor...');
    try {
        
        await connection();
        console.log('Conexion exitosa a la base de datos');

        const allDataUsuarios = await listadoModel.find();
        
        res.render('index', { allDataUsuarios });
    } catch (error) {
        console.log(error);
    }
}

module.exports = controller;