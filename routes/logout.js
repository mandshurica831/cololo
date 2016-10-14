var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {

  if (req.session.user_id) {
    req.session.destroy();
    res.render('_template/message', {
      title: ' - ログアウト',
      message: 'ログアウトしました',
      link: {to:"login",text:"ログインページへ"},
    });
  } else {
    //res.send('ログインしてないよ！');
    res.render('login', {
      title: ' - ログイン'
    });
  }
});

module.exports = router;
