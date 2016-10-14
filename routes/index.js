var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('app/mysql/conect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '',
    user: req.session.user_id
  });
});

router.post('/', function(req, res, next) {

});

module.exports = router;
