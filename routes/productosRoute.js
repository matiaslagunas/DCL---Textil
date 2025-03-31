const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productosPath = path.join(__dirname, '../marcas y demas/productos.json');
const productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

// Ruta para la página principal
router.get('/K-pro', (req, res) => {
   
    res.render('productos', { productos });
});
module.exports = router;