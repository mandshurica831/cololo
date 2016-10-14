var connection = require('app/mysql/conect');


module.exports = function(req, res, next) {

var userId = req.session.user_id;
res.locals.uid = userId;

if(userId){
  var query = 'SELECT * FROM users WHERE user_id = "' + userId+'"';
  connection.query(query, function(err, rows) {
    if (!err) {
      res.locals.user = rows.length? rows[0]: false;
      console.log("[res.locals(inner)] -",res.locals);
    }else{
      console.log("[err] -",err);
    }
  });
}

console.log("[res.session]",req.session);
console.log("[res.locals]",res.locals);
next();
};
