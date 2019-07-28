// Importar express
const express = require('express');
// Importamos path
const path = require('path');
// Importar el body parse
const bodyParser = require('body-parser');
// Importar los routes
const routes = require('./routes');
// Importar dotenv
require('dotenv').config();
// Importar config
const configs = require('./config');


// db.authenticate()
//     .then(() => console.log('DB Conectado'))
//     .catch(error => console.log(error));


// Configurar Express
const app = express();
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 4000);

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vista
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estatica llamada public
app.use(express.static('public'));


const config = configs[app.get('env')];
app.locals.titulo = config.nombresitio;
// console.log(app.locals);


// Cargar el año actual y genera la ruta
app.use((req, res, next) => {
    // Crear Fecha actual
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    // console.log(res.locals);
    return next();
})

// Ejecutamos el body parse
app.use(bodyParser.urlencoded({extended: true}))

// Cargar las rutas
app.use('/', routes());


app.listen(app.get('port'));