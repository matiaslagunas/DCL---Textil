const express = require('express');
const path = require('path');
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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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

// Servir el sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');

  const sitemapStream = new sitemap.SitemapStream({ hostname: 'http://localhost:3300' });

  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
    { url: '/nosotros', changefreq: 'monthly', priority: 0.8 },
    { url: '/servicios', changefreq: 'monthly', priority: 0.8 },
    { url: '/productos', changefreq: 'monthly', priority: 0.8 },
    { url: '/Contacto/H-contacto', changefreq: 'monthly', priority: 0.6 },
    { url: '/servicios/L-ser', changefreq: 'monthly', priority: 0.6 },
    { url: '/productos/K-pro', changefreq: 'monthly', priority: 0.6 },
    { url: '/nosotros/M-nos', changefreq: 'monthly', priority: 0.6 }
  ];

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();
  sitemapStream.pipe(res);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
