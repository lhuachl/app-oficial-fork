const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('App Oficial - Grupo 5 funcionando correctamente 🚀');
});

router.get('/saludo', (req, res) => {
  res.send('Hola, esta es la ruta de saludo del Grupo 5');
});

router.get('/estado', (req, res) => {
  res.send('Servidor activo y funcionando correctamente');
});

module.exports = router;
