const express = require('express');
const engine = require('ejs-locals');
const path = require('path');
const serveFavicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// my_apps
const debugLogsSet = require('_debug_logs_set');
const getUser = require('mysql/get_user');


const app = express();

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(`${__dirname}/src/ejs/`,'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(serveFavicon(path.join(__dirname, 'public', 'favicon.ico')));
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
app.use(function(req, res, next) {
  res.locals.nande = 'nande';
  next();
});

// routes
//=======================
const routes = require('./routes/index');
const _logout = require('./routes/_logout');
const user = require('./routes/user');
const login = require('./routes/login');
const mypage = require('./routes/mypage');
const info = require('./routes/info');
//=======================
app.use('/', getUser, debugLogsSet, routes);
app.use('/logout', _logout);
app.use('/user', user);
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
