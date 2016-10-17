var express = require('express');
var router = express.Router();
var connection = require('mysql/pool')

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SHOW TABLES';
  connection.query(query, function(err, rows) {
    if(!err){
      res.render('mypage/index', {
        title: ' - マイページ',
      });
    }
  });
});

router.post('/', function(req, res, next) {

});

module.exports = router;
