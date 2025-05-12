const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/H-contacto', (req, res) => {
   
    res.render('contacto', { activePage: 'contacto'});
});
module.exports = router;
