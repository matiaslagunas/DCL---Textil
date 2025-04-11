const express = require('express');
const path = require('path');
const fs = require('fs');
const sitemap = require('sitemap');
const app = express();
const port = 3300;

// Importar rutas
const indexRoute = require('./routes/indexRoute');
const contactoRoute = require('./routes/contactoRoute');
const nosotrosRoute = require('./routes/nosotrosRoute');
const serviciosRoute = require('./routes/serviciosRoute');
const productosRoute = require('./routes/productosRoute');

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
app.use('/Contacto', contactoRoute);
app.use('/nosotros', nosotrosRoute);
app.use('/servicios', serviciosRoute);
app.use('/productos', productosRoute);

// Crear un mapa del sitemap
const routes = [
  '/', 
  '/Contacto', 
  '/nosotros', 
  '/servicios', 
  '/productos',
  // Si tienes más rutas, añádelas aquí
];

const sitemapData = sitemap.createSitemap({
  hostname: 'https://www.dcl.ar',
  cacheTime: 600000,  // 600 sec - cache purge period
  urls: routes.map(route => ({ url: route, changefreq: 'daily', priority: 0.7 }))
});

// Generar el archivo sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(sitemapData.toString());
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
