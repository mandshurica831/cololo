const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('', () => {
    res.render('mypage/index', {
      title: ' - マイページ',
    });
  });
});

module.exports = router;
