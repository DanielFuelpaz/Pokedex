var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'bwlzwusixbbsd7oqhmvd-mysql.services.clever-cloud.com',
  user     : 'uvtrtmhl1kh3bgym',
  password : 'srpWdxh10ffLwT5WsyY0',
});

connection.connect(function() {
});


var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function() {
  // Neat!
});
console.log(query.sql);
