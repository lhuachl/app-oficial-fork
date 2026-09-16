const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('App Oficial - Grupo 5 funcionando correctamente 🚀');
});
app.get('/saludo', (req, res) => {
  res.send('Hola, esta es la ruta de saludo del Grupo 5');
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});