var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('app/mysql/conect');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.user_id) {
    res.send('直接叩くのやめろってばあ');
  } else {
    res.render('user_create/index', {
      title: ' - 新規登録',
      user: req.session.user_id
    });
  }
});


router.post('/', function(req, res, next) {

  //入力値を拾う
  var userId = req.body.user_id;
  var email = req.body.email;
  var password = req.body.password;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  var updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

  //入力内容チェック
  if (0 === userId.length || 12 < userId.length) {
    alert("ユーザーIDの文字数は1〜20字にしてください");
    return false;
  };

  var emailExistsQuery = 'SELECT * FROM users WHERE email = "' + email + '" LIMIT 1';
  var userIdExistsQuery = 'SELECT * FROM users WHERE user_id = "' + userId + '" LIMIT 1';

  var registerQuery = 'INSERT INTO users (user_id, email, password, created_at, updated_at) VALUES ("' + userId + '", "' + email + '", "' + password + '", "' + createdAt + '", "' + updatedAt + '")';
  console.log(registerQuery);

  //emailすでに登録されてないかチェック
  connection.query(emailExistsQuery, function(err, email) {
    var emailExists = email.length === 1;
    if (emailExists) {
      res.render('user_create/index', {
        title: 'cololo',
        ErrorMessage: '既に登録されているメールアドレスです'
      });
    } else {
        //user_idすでに登録されてないかチェック
        connection.query(userIdExistsQuery, function(err, user_id) {
          var userIdExists = user_id.length === 1;
          if (userIdExists) {
            res.render('user_create/index', {
              title: 'cololo',
              ErrorMessage: 'そのユーザーIDは既に使用されています。'
            });
          } else {
            //登録
            connection.query(registerQuery, function(err, rows) {
              console.log(err,rows);
              res.render('_template/message',{
                title: ' - 登録完了',
                message:"登録が完了しました！",
                link:{to:"login",text:'ログインページへ'},
              });
            });
          }
        });
    }
  });


});

module.exports = router;
