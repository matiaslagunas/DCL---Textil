const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Ruta al JSON con productos (ajustada a tu estructura de carpetas)
const productos_generalPath = path.join(__dirname, '..', 'public', 'js', 'json', 'productos_general.json');

// Función para leer los productos del archivo JSON
function obtenerProductos() {
    try {
        const productosJSON = JSON.parse(fs.readFileSync(productos_generalPath, 'utf-8'));
        return Object.values(productosJSON); // Convertir en array por si es objeto
    } catch (error) {
        console.error('Error leyendo productos_general.json:', error);
        return [];
    }
}

// Página principal de productos (sin listado todavía)
router.get('/', (req, res) => { 
    res.render('productos_previa');
});

// Rutas para cada categoría
router.get('/Hombres', (req, res) => { 
    const productos = obtenerProductos();
    res.render('productos_hombres', { pagina : "hombres" , productos });
});

router.get('/Mujeres', (req, res) => { 
    const productos = obtenerProductos();
    res.render('productos_mujeres', { pagina : "mujeres" , productos });
});

router.get('/Ninios', (req, res) => { 
    const productos = obtenerProductos();
    res.render('productos_niños', { pagina : "ninios" , productos });
});

router.get('/Unisex', (req, res) => { 
    const productos = obtenerProductos();
    res.render('productos_unisex', { pagina : "unisex" , productos });
});

module.exports = router;
