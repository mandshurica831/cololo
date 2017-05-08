const express = require('express');
const pager = require('general/pager');
const connection = require('mysql/pool');
const moment = require('moment');

const router = express.Router();

router.get('/lists', (req, res) => {
  const limit = 10;
  const offset = 0;
  const sql = `SELECT user_id, user_name FROM users LIMIT ${limit} OFFSET ${offset}`;
  const query = connection.query(sql);
  connection.query(sql, (err, rows) => {
    console.log(rows)
    if(err){
      res.render('_partial/message', {
        title: ' - エラー',
        message: `リストがうまく取得できませんでした`,
      });
      return false;
    }
    res.render('user/lists', {
      title: ` - ユーザーリスト`,
      params: req.params,
      rows: rows,
    });
  });

  pager();

});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const sql = `SELECT user_id,user_name,user_color FROM users WHERE user_id = "${userId}" LIMIT 1`;
  connection.query(sql, (err, rows) => {
    const uid = rows.length ? rows[0].user_id : false;
    if(uid){
      console.log(rows,rows.user_name)
      res.render('user/_id', {
        title: ` - ${rows[0].user_name}さんのプロフィール`,
        params: req.params,
        rows: rows[0],
      });
    }else{
      res.render('_partial/message', {
        title: ' - エラー',
        message: `" ${userId} " というIDのユーザーは存在しません`,
      });
    }
  });
});

module.exports = router;
