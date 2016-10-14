var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {

  if (req.session.user_id) {
    req.session.destroy();
    res.render('logout', {
      title: ' - ログアウト'
    });
  } else {
    res.send('ログインしてないのにログアウトしようとしないでね！');
  }
});

module.exports = router;
