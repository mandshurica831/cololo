const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('', () => {
    res.render('index', {
      title: '',
    });
  });
});

module.exports = router;
