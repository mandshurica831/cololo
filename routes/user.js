const express = require('express');
const connection = require('mysql/pool');
const moment = require('moment');

const router = express.Router();

router.get('/create', (req, res) => {
  if (req.session.user_id) {
    res.redirect('/');
  } else {
    res.render('user/create', {
      title: ' - 新規登録',
    });
  }
});


router.post('/', (req, res) => {
  // 定数
  var str;

  // 入力値
  const userId = req.body.user_id;
  const password = req.body.password;
  const userName = req.body.user_name;
  const userColor = req.body.user_color;
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

  // 入力内容チェック
  if (userId.length === 0 || userId.length > 12) {
    res.render('_template/message', {
      title: ' - エラー',
      message: 'ユーザーIDの文字数は1〜20字にしてください',
    });
  }

  str = 'INSERT INTO users (user_id, password, user_name, user_color, created_at, updated_at)';
  const values = [userId, password, userName, userColor, createdAt, updatedAt];
  str += ` VALUES ("${values.join('", "')}")`;

  const sql = {
    query: str,
    user_id_chk: `SELECT * FROM users WHERE user_id = "${userId}" LIMIT 1`,
  };
  console.log(sql);

  // user_idすでに登録されてないかチェック
  connection.query(sql.user_id_chk, (err, rows) => {
    const uid = rows.length === 1;
    if (uid) {
      res.render('user/create', {
        title: 'cololo',
        ErrorMessage: 'そのユーザーIDは既に使用されています。'
      });
    } else {
      // 登録
      connection.query(sql.query, (err) => {
        if (!err) {
          res.render('_template/message', {
            title: ' - 登録完了',
            message: '登録が完了しました！',
            link: { to: '/login', text: 'ログインページへ' },
          });
        } else {
          res.render('_template/message', {
            title: ' - エラー',
            message: err,
          });
        }
      });
    }
  });
  return false;
});

module.exports = router;
