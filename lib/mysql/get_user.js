var connection = require('mysql/pool');

/*
*
* ユーザー情報を取得する
*
*/

module.exports = function(req, res, next) {

  var userId = req.session.user_id;

  if (userId) {
    var sql = 'SELECT * FROM users WHERE user_id = "' + userId+'"';
    var query = connection.query(sql, [userId]);

    query
    .on('error', function(err) {
      console.log('err:  ', err );
    })
    .on('result', function(rows) {
      res.locals.user = rows;
    });
  };

  next();

}
