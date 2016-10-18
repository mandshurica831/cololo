const mysql = require('mysql');
const express = require('express');

const app = express();

/*
*
* DBに接続する(pool)
*
*/

let dbConfig;

if (app.get('env') === 'development') {
  /* development */
  dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cololo_develop'
  };
} else {
  /* 本番 */
  dbConfig = {
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'baf664a179288c',
    password: '911e0e04',
    database: 'heroku_b428d917d0ba563'
  };
}

const pool = mysql.createPool(dbConfig);

module.exports = pool;
