const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

router.get('/states', (req, res) => {
  connection.query('', () => {
    res.render('manual/states', {
      title: ' - 遊び方 ステータス',
    });
  });
});

module.exports = router;
