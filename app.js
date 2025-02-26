const express = require('express');
const path = require('path');
const app = express();
const port = 3100;

// Importar rutas
const indexRoute = require('./routes/indexRoute');


// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');  // Establece EJS como motor de vista
app.set('views', path.join(__dirname, 'views'));  // Establece el directorio de vistas

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Sirve Bootstrap CSS y JS desde node_modules
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

// Rutas
app.use('/', indexRoute);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
