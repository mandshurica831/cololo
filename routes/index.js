var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('app/mysql/pool');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user_id) {
    var query = 'SHOW TABLES';
    connection.query(query, function(err, rows) {
      if(!err){
        res.render('index', {
          title: '',
        });
      }
    });
  } else {
    res.render('index', {
      title: '',
    });
  }
});

router.post('/', function(req, res, next) {

});

module.exports = router;
