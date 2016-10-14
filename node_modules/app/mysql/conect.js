var mysql = require('mysql');
var express = require('express');
var app = express();

/*
*
* DBに接続する(conect)
*
*/

var connection;

if(app.get('env') == 'development'){

  /* development */
  var db_config = {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cololo_develop'
  };

}else{

  /* 本番 */
  var db_config = {
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'baf664a179288c',
    password : '911e0e04',
    database : 'heroku_b428d917d0ba563'
  };

}

var connection  = mysql.createConnection(db_config);

module.exports = connection;
