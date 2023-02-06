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
  //obtenerIdEntrenador("Daniel");
  //añadirItems(3, "Cura total");
  //console.log(obtenerIdEntrenador("Daniel"));
  //itemsEntrenador(1,4);
  //insertarPokemon("Mr Mime");
  pokemonEntrenador(1,3);
  con.end(function (err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("Conexión cerrada");
  });
});

function obtenerIdEntrenador(name) {
  var sql = "SELECT EntrenadorID FROM Entrenador WHERE Entrenador.Nombre = ?";
  var values = [[name]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result[0].EntrenadorID);
  });
}

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

//crear tabla de usuarios junto con el login

function modificarUsuario(name) {
  var sql = "UPDATE Entrenador SET Nombre =? WHERE Nombre =?";
  var values = [[name]];
  con.query(sql, [values]), function (err, result) {
    if (err) {
      return console.log("error:" + err, message);
    }
    console.log("Datos modificados" + result.affectedRows);
  };
}

function añadirItems(cantidad, name) {
  var sql = "INSERT INTO Misitems (Cantidad, Nombre) VALUES ?";
  var values = [[cantidad, name.toLowerCase()]];
  con.query(sql, [values]), function (err, result) {
    if (err) {
      var sql = "UPDATE Misitems SET Cantidad=? WHERE Nombre=?";
      var values = [[cantidad, name]];
      con.query(sql, [values], function (err, result) {
        if (err) {
          return console.log("error:" + err, message);
        };
      });
      //return console.log("error:" + err, message);
      console.log("Datos insertados" + result.affectedRows);
    };
  }
}

function obtenerIdEntrenador(name) {
  var sql = "SELECT EntrenadorID FROM Entrenador WHERE Entrenador.Nombre = ?";
  var values = [[name]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result[0].EntrenadorID);
  });
}

function obtenerIdItem(name) {
  var sql = "SELECT MisitemsID FROM Misitems WHERE Misitems.Nombre = ?";
  var values = [[name]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result[0].MisitemsID);
  });
}

function obtenerIdPokemon(name) {
  var sql = "SELECT MispokemonID FROM Mispokemon WHERE Mispokemon.Nombre = ?";
  var values = [[name]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result[0].MispokemonID);
  });
}

function obtenerIdBerries(name) {
  var sql = "SELECT MisberriesID FROM Misberries WHERE Misberries.Nombre = ?";
  var values = [[name]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result[0].MisberriesID);
  });
}
//firmeza en vez de suavidad - berries
function itemsEntrenador(cod_I, cod_E) {
  var sql = "INSERT INTO EntrenadorMisitems (MisitemsID, EntrenadorID) VALUES?";
  var values = [[cod_I, cod_E]];
  con.query(sql, [values]), function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows);
  };
}
//SELECT EntrenadorID, Contraseña, (SELECT EntrenadorID from Usuarios WHERE Nombre=?) as NombreEntrenador from Usuarios;
//SELECT Nombre, Contraseña, (SELECT EntrenadorID from Usuarios WHERE Nombre="Daniel") as IDEntrenador from Usuarios
function pokemonEntrenador(cod_P, cod_E) {
  var sql = "INSERT INTO EntrenadorMispokemon (MispokemonID, EntrenadorID) VALUES?";
  var values = [[cod_P, cod_E]];
  con.query(sql, [values]), function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows);
  };
}

function berriesEntrenador(cod_B, cod_E) {
  var sql = "INSERT INTO EntrenadorMisberries (MisberriesID, EntrenadorID) VALUES?";
  var values = [[cod_B, cod_E]];
  con.query(sql, [values]), function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows);
  };
}
//Select con ambos indices EntrenadorMisItems result.affectedRows
function insertarPokemon(name) {
  var aux  = name.toLowerCase();
  aux = aux.replaceAll(" ","-");
  var sql = "INSERT INTO Mispokemon (Nombre) VALUES ?";
  var values = [[aux]];
  con.query(sql, [values]),
    function (err, result) {
      if (err) {
        return console.log("error:" + err, message);
      }
      console.log("Datos insertados" + result.affectedRows);
    };
}

function insertarBerries(name) {
  var aux  = name.toLowerCase();  
  var sql = "INSERT INTO Misberries (Nombre) VALUES ?";
  var values = [[aux]];
  con.query(sql, [values]),
    function (err, result) {
      if (err) {
        return console.log("error:" + err, message);
      }
      console.log("Datos insertados" + result.affectedRows);
    };
}