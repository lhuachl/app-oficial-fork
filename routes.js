const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenidos a la App Oficial del Grupo 5 🚀');
});

router.get('/saludo', (req, res) => {
  res.send('Hola, esta es la ruta de saludo del Grupo 5');
});

router.get('/estado', (req, res) => {
  res.send('Servidor activo y funcionando correctamente');
});

module.exports = router;
