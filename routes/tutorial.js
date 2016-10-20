const express = require('express');
const connection = require('mysql/pool');

const router = express.Router();

// index
router.get('/', (req, res) => {
  connection.query('', () => {
    res.render('tutorial/index', {
      title: ' - はじまり',
    });
  });
});

// create
router.get('/01', (req, res) => {
  connection.query('', () => {
    res.render('tutorial/01', {
      title: ' - くりえーと',
    });
  });
});

module.exports = router;
