var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', {
    title: ' - info',
    user: req.session.user_id
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mypage/index', {
    title: ' - マイページ',
    user: req.session.user_id
  });
});

module.exports = router;
