const express = require('express');
const app = express();
const port = 3100;

// Ruta básica
app.get('/', (req, res) => {
  res.send("index");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
