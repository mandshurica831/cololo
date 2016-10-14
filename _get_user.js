var connection = require('./_mysql_conect');

/*
*
* ユーザー情報を取得する
*
*/

module.exports = function(req, res, next) {

  var userId = req.session.user_id;
  console.log("[uid] -",userId)
  if(userId){
    var query = 'SELECT user_id FROM users WHERE user_id = "' + userId + '"';
    connection.query(query, function(err, rows) {
      if (!err) {
        res.locals.user = rows.length? rows[0]: false;
        console.log("[rows] -",rows)
      }
    });
  }
  next();
};
