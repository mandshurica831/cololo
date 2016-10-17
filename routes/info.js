var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
connection.query("",function(){

  res.render('info/index', {
    title: ' - info',
  });

});
});

module.exports = router;
