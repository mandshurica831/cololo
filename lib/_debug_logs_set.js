const connection = require('mysql/pool');
var colors = require('colors');

module.exports = function(req, res, next) {
  const userId = req.session.user_id;
  res.locals.uid = userId;

  console.log('### [res.locals] =>'.gray, res.locals);
  connection.query('', () => {
    console.log('### [res.locals(inner)] =>'.gray, res.locals);
  });
  next();
};
