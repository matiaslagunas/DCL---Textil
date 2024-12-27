const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home' 
    }); // Renderiza la vista 'index.ejs'
});

module.exports = router;
