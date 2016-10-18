const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.user_id) {
    res.redirect('/');
  } else {
    res.render('login/index', {
      title: ' − ログイン',
    });
  }
});

router.post('/', (req, res) => {
  // 入力値（定数）
  const userId = req.body.user_id;
  const password = req.body.password;
  const sql = `SELECT user_id FROM users WHERE user_id = "${userId}" AND password = "${password}" LIMIT 1`;
  console.log(sql);

  connection.query(sql, (err, rows) => {
    const uid = rows.length ? rows[0].user_id : false;
    if (uid) {
      console.log(rows);
      req.session.user_id = uid;
      res.redirect('/mypage');
    } else {
      console.log('ERROR >>>>> ', err);
      res.render('login/index', {
        title: 'ログイン',
        noUser: 'ユーザーIDかパスワードが間違っています'
      });
    }
  });
});

module.exports = router;
