var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../modules/mysqlConnection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user_create', {
    title: 'cololo',
  });
});


router.post('/', function(req, res, next) {

  var userId = req.body.user_id;
  var email = req.body.email;
  var password = req.body.password;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

  var emailExistsQuery = 'SELECT * FROM users WHERE email = "' + email + '" LIMIT 1';

  var registerQuery = 'INSERT INTO users (user_id, email, password, created_at) VALUES ("' + userId + '", ' + '"' + email + '", ' + '"' + password + '", ' + '"' + createdAt + '")';

  connection.query(emailExistsQuery, function(err, email) {
    var emailExists = email.length === 1;
    if (emailExists) {
      res.render('register', {
        title: '新規会員登録',
        emailExists: '既に登録されているメールアドレスです'
      });
    } else {
      connection.query(registerQuery, function(err, rows) {
        res.redirect('/login');
      });
    }

  });
});

module.exports = router;
