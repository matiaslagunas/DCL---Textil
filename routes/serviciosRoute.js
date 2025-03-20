const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/L-ser', (req, res) => {
   
    res.render('servicios');
});
module.exports = router;