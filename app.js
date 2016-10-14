var express = require('express');
var engine = require('ejs-locals');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//var get_user = require('app/mysql/get_user');

var app = express();

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


// debug
//=======================
app.use(function(req,res,next){
  res.locals.nande = "nande";
  next();
});
var debug_logs_set = require('./_debug_logs_set');

//=======================
// routes
//=======================
var routes = require('./routes/index');
var _logout = require('./routes/_logout');
var user_create = require('./routes/user_create');
var login = require('./routes/login');
var mypage = require('./routes/mypage');
var info = require('./routes/info');
//--------------------------
app.use('/', debug_logs_set, routes);
app.use('/logout', _logout);
app.use('/user_create', user_create);
app.use('/login', login);
app.use('/mypage', mypage);
app.use('/info', info);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
