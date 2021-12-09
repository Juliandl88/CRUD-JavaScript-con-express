const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biblioteca"
});

con.connect(
    (err) => {
        if (!err){
        console.log("Conexión establecida");
    }else{
        console.log("Error al conectar");
    }
});

module.exports = con;