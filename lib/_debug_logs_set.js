var connection = require('mysql/conect');
var express = require('express');
var app = express();

module.exports = function(req, res, next) {

  var userId = req.session.user_id;
  res.locals.uid = userId;

  console.log("###[res.locals]",res.locals);

next();
};
