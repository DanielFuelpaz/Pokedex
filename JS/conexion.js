var mysql = require("mysql");
var con = mysql.createConnection({
  host: "bxjlkcq3c4ybesmfzmw6-mysql.services.clever-cloud.com",
  user: "unuf0c853htqddan",
  password: "I3JJi91nrBQDXYcS2rTW",
  database: "bxjlkcq3c4ybesmfzmw6",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Conectado");
  insertarUsuario("Daniel", "Kanto");
  con.end(function (err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("Conexión cerrada");
  });
});

function insertarUsuario(name, region) {
  var sql = "INSERT INTO Entrenador (Nombre, Region) VALUES ?";
  var values = [[name, region]];
  con.query(sql, [values]),
    function (err, result) {
      if (err) {
        return console.log("error:" + err, message);
      }
      console.log("Datos insertados" + result.affectedRows);
    };
}
