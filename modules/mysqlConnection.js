var mysql = require('mysql');
var express = require('express');
var app = express();

  /*
  *
  * DBに接続する
  *
  */

var connection;

  if(app.get('env') == 'development'){
    //development
    var db_config = {
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'chat_test_160801'
    };
  }else{
    /* 本番 */
    var db_config = {
      host     : 'us-cdbr-iron-east-04.cleardb.net',
      user     : 'b261359fb916b2',
      password : '61ef1f35',
      database : 'heroku_6722ee1e07d3f4d'
    };
  }

var pool  = mysql.createPool(db_config);

module.exports = pool;
