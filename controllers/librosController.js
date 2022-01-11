const conexion = require("../config/conexion");
const libro = require("../model/libro");
const borrar = require("fs");

module.exports = {
  index: function (req, res) {
    libro.obtener(conexion, function (err, datos) {
      console.log(datos);

      res.render("libros/index", {
        title: "Aplicación CRUD - NODE y EXPRESS",
        libros: datos,
      });
    });
  },

  crear: function (req, res) {
    res.render("libros/crear");
  },

  guardar: function (req, res) {
    console.log(req.body);
    console.log(req.file.filename);

    libro.insertar(conexion, req.body, req.file, function (err) {
      res.redirect("/libros");
    });
  },

  eliminar: function (req, res) {               
    console.log("Recepción de datos para eliminar");
    console.log(req.params.id);
    libro.retornarDatosID(conexion, req.params.id, function (err, registros) {     // Funcion para retornar datos de un libro
      var nombreImagen = "public/images/" + registros[0].imagen;

        if(borrar.existsSync(nombreImagen)){
            borrar.unlinkSync(nombreImagen);
        }

        libro.borrar(conexion, req.params.id, function (err) {
          res.redirect("/libros");

        });
    });
},

  editar: function (req, res) {
    libro.retornarDatosID(conexion, req.params.id, function (err, registros) { 
      console.log(registros[0]); 
      res.render("libros/editar", {
        libro: registros[0],
      });

    });

  },

  actualizar: function (req, res) {
    console.log(req.body.nombre);
    //console.log(req.file.filename);

    if(req.file){
      if(req.file.filename){
        libro.retornarDatosID(conexion, req.body.id , function (err, registros) {     // Funcion para retornar datos de un libro
          var nombreImagen = "public/images/" + (registros[0].imagen);
    
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
            }
    
            libro.actualizarArchivo(conexion, req.body, req.file, function (err) {
              
            //res.redirect("/libros");
    
            });
        });
      }
    }

    if(req.body.nombre){
    libro.actualizar(conexion, req.body, function (err) {
    
    });

    res.redirect("/libros");
  }

  

},


};