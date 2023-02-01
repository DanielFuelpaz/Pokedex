var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'bxjlkcq3c4ybesmfzmw6-mysql.services.clever-cloud.com',
  user: 'unuf0c853htqddan',
  password: 'I3JJi91nrBQDXYcS2rTW',
  database: 'bxjlkcq3c4ybesmfzmw6'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Entrenador (Nombre, Region) VALUES ?";
  var values = [
    ['Marilyn', 'Alola'],
    ['Majo', 'Galar'],
    ['Miguel', 'Paldea']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});