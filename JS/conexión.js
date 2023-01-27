var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'bwlzwusixbbsd7oqhmvd-mysql.services.clever-cloud.com:3306/bwlzwusixbbsd7oqhmvd',
  user: 'uvtrtmhl1kh3bgym',
  password: 'srpWdxh10ffLwT5WsyY0',
  database: 'NOMBRE_DE_LA_BASE_DE_DATOS'
});

connection.connect( (err) =>{
    if (err) throw err;
    console.log('Conexión satisfactoria')
});    
