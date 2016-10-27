const express = require('express');
const connection = require('mysql/pool');
const moment = require('moment');

const router = express.Router();

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
      res.render('_template/message', {
        title: ' - エラー',
        message: `" ${userId} " というIDのユーザーは存在しません`,
      });
    }
  });
});

module.exports = router;
