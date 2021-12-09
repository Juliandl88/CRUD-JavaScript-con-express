var express = require('express');
var router = express.Router();
const librosController = require('../controllers/librosController');

/* GET home page. */
router.get('/', librosController.index);      // GET /libros
router.get('/crear', librosController.crear);   // GET /libros/crear
router.post('/', librosController.guardar);   // POST /libros/guardar

module.exports = router;    //exportar el router