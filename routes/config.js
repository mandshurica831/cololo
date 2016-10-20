const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('', () => {
    res.render('config/index', {
      title: '- 設定',
    });
  });
});

module.exports = router;
