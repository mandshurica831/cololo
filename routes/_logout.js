const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.user_id) {
    req.session.destroy();
    res.render('_partial/message', {
      title: ' - ログアウト',
      message: 'ログアウトしました',
      link: { to: 'login', text: 'ログインページへ' },
    });
  } else {
    res.render('login/index', {
      title: ' - ログイン'
    });
  }
});

module.exports = router;
