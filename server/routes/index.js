// Importar express
const express = require('express');
// Importar metodo de express Router
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

/* Contoladores */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

//Forma  de exportar con module.exports
module.exports = function() {
    router.get('/', homeController.consultasHomepage);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    // Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimoniales);

    return router;
}