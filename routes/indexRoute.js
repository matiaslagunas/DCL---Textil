const express = require('express');
const router = express.Router();
const comentarios = require('../marcas y demas/marcas.json')

// Ruta para la página principal
router.get('/', (req, res) => {
   
    res.render('index', { 
        title: 'Home', 
        comentarios: comentarios.comentarios 
    });
});
module.exports = router;
