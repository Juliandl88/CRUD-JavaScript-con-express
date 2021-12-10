const conexion = require('../config/conexion');
const libro = require('../model/libro'); 
const borrar = require("fs");

module.exports = {

    index:function(req, res){

        libro.obtener(conexion, function (err, datos){
            console.log(datos);
        
            res.render('libros/index', { title: 'Aplicación CRUD con NODE y EXPRESS', libros:datos });

        });

        

    },

    crear:function(req, res){

        res.render('libros/crear');

    },

    guardar:function(req, res){
        console.log(req.body);
        console.log(req.file.filename);

        libro.insertar(conexion, req.body, req.file, function (err){   
            res.redirect('/libros');
        });
           

    },

    eliminar:function(req, res){
        console.log("Recepción de datos para eliminar");
        console.log(req.params.id);
        libro.retornarDatosID(conexion, req.params.id, function(err, registros){

            var nombreImagen = "public/images/" + (registro[0].imagen);
            res.send(nombreImagen);

 
        })
    }

}