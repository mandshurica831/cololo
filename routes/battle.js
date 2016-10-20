const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

// sample
router.get('/sample', (req, res) => {
  connection.query('', () => {
    res.render('battle/sample', {
      title: ' - 戦闘サンプルページ',
    });
  });
});

module.exports = router;
