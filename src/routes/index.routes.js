// invocamos a express
const express = require('express');
// invocamos al modulo Router para trabajar con rutas
const router = express.Router();

// invocamos el controller
const controller = require('../controllers/index.controller');

// obtenemos la peticion hacia la raiz
router.get('/', controller.index);

module.exports = router;