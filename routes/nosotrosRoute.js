const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/M-nos', (req, res) => {
   
    res.render('nosotros');
});
module.exports = router;