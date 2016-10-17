var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('mysql/pool');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
connection.query("",function(){

      res.render('index', {
        title: '',
      });

});
});

router.post('/', function(req, res, next) {

});

module.exports = router;
