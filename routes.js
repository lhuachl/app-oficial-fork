const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('Grupo 5 - App Oficial lista para usar ✅');
});

router.get('/saludo', (req, res) => {
  res.send('Hola, esta es la ruta de saludo del Grupo 5');
});

router.get('/estado', (req, res) => {
  res.send('Servidor activo y funcionando correctamente');
});

module.exports = router;
