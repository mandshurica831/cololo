var express = require('express');
var router = express.Router();
var connection = require('mysql/pool');

/* GET home page. */
router.get('/', function(req, res, next) {
connection.query("",function(){

  res.render('info/index', {
    title: ' - info',
  });

});
});

module.exports = router;
