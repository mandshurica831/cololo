var express = require('express');
var router = express.Router();
var connection = require('mysql/pool');
var moment = require('moment');

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
