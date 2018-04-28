var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongodb = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://svetla:tehnopolis@ds147469.mlab.com:47469/tehnopolis');
var session = require('express-session');
var sha1 = require("sha1");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var productRouter = require('./routes/product');
// novo dobaveni ROUTove
var phonesTabletRouter = require('./routes/phonesTablet');
var computersRouter = require('./routes/computers');
var photosCamerasRouter = require('./routes/photosCameras');
var TvVideoGamingRouter = require('./routes/TvVideoGaming');
var autoGpsRouter = require('./routes/autoGps');
// tva beshe

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
  app.use(session({
    secret: '1234',
    resavu: true,
    saveUninitialized: true,
    cookie: {maxAge: 6000000}
  }));
app.use(function(req, res, next){
  req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/product', productRouter);
app.use('/login', loginRouter);
// novi middleware
app.use('/phonesTablet',phonesTabletRouter);
app.use('/computers',computersRouter);
app.use('/photosCameras',photosCamerasRouter);
app.use('/TvVideoGaming',TvVideoGamingRouter);
app.use('/autoGps',autoGpsRouter);
// krai middleware

// app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
