var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info/index', {
    title: ' - info',
    user: req.session.user_id
  });
});

module.exports = router;
