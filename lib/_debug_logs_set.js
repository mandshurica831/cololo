const connection = require('mysql/pool');
const colors = require('colors');
const requireAll = require('require_all');

module.exports = function(req, res, next) {

  var dirpath = `${process.cwd()}/src/scss/`;
  requireAll.s(dirpath,function(err,res){
    if(err) console.log(err)
    console.log(res);
    for(key in res){
      console.log(res[key].split(dirpath)[1].replace('.scss',''))
    }
  });


  const userId = req.session.user_id;
  res.locals.uid = userId;

  console.log('### [res.locals] =>'.gray, res.locals);
  connection.query('', () => {
    console.log('### [res.locals(inner)] =>'.gray, res.locals);
  });
  next();
};
