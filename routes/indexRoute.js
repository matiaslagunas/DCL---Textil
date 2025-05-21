const express = require('express');
const router = express.Router();
const comentarios = require('../marcas y demas/marcas.json')

// Ruta para la página principal
router.get('/', (req, res) => {
   
    res.render('index', { 
      comentarios: comentarios.comentarios,
      activePage: 'inicio'
    });
    
});

module.exports = router;
