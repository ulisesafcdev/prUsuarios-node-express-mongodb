// invocamos a express
const express = require('express');
const app = express();

// invocamos las rutas
const routes = require('./routes/index.routes');
app.use(routes);

// invocamos el modulo para normalizar las rutas
const path = require('path');

// buscamos la direccion de donde estan los archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

// definiremos las views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones...');
})