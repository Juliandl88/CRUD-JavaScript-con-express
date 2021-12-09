const conexion = require('../config/conexion');
const libro = require('../model/libro'); 

module.exports = {

    index:function(req, res){

        libro.obtener(conexion, function (err, datos){
            console.log(datos);
        
            res.render('libros/index', { title: 'Aplicación CRUD con NODE y EXPRESS' });

        });

        

    }

}