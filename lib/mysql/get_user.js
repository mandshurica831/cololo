const connection = require('mysql/pool');

/*
*
* ユーザー情報を取得する
*
*/

module.exports = function(req, res, next){
  const userId = req.session.user_id;
  if (userId) {
    const sql = `SELECT * FROM users WHERE user_id = "${userId}"`;
    const query = connection.query(sql);
    query
    .on('error', (err) => {
      console.log('err: ', err);
    })
    .on('result', (rows) => {
      console.log('result: ', rows);
      res.locals.user = rows;
    });
  }

  next();
};
