var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('app/mysql/conect');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user_id) {
    res.redirect('mypage');
  } else {
    res.render('index', {
      title: '',
    });
  }
});

router.post('/', function(req, res, next) {

});

module.exports = router;
