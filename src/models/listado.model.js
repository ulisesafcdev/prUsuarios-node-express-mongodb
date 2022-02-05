// invocamos a mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuariosSchema = new Schema ( {
    alias: String,
    apellido: String,
    edad: String,
    name: String
})

const UsuariosModel = mongoose.model('usuarios', UsuariosSchema);

module.exports = UsuariosModel;