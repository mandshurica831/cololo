var express = require('express');
var router = express.Router();
var connection = require('../modules/mysqlConnection');

router.get('/', function(req, res, next) {
  if (req.session.user_id) {
    res.redirect('/');
  } else {
    res.render('login', {
      title: 'ログイン'
    });
  }
});

router.post('/', function(req, res, next) {
  var user_id = req.body.user_id;
  var password = req.body.password;
  var query = 'SELECT user_id FROM users WHERE user_id = "' + user_id + '" AND password = "' + password + '" LIMIT 1';
  connection.query(query, function(err, rows) {
    var userId = rows.length? rows[0].user_id: false;
    if (userId) {
      req.session.user_id = userId;
      res.redirect('/');
    } else {
      res.render('login', {
        title: 'ログイン',
        noUser: 'ユーザーIDかパスワードが間違っています'
      });
    }
  });
});

module.exports = router;
