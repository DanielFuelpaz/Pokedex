var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'bwlzwusixbbsd7oqhmvd-mysql.services.clever-cloud.com',
  user: 'uvtrtmhl1kh3bgym',
  password: 'srpWdxh10ffLwT5WsyY0'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión satisfactoria')
});