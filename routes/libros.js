var express = require('express');
var router = express.Router();
const librosController = require('../controllers/librosController');

const multer = require('multer');
const fecha = Date.now();

var rutaAlmacen = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, fecha + " " + file.originalname);
    }

});

var cargar = new multer({

    storage: rutaAlmacen    

});

/* GET home page. */
router.get('/', librosController.index);      // GET /libros
router.get('/crear', librosController.crear);   // GET /libros/crear
router.post('/', cargar.single("archivo"), librosController.guardar);   // POST /libros/guardar
router.post("/eliminar/:id", librosController.eliminar);
router.get("/editar/:id", librosController.editar);

module.exports = router;    //exportar el router