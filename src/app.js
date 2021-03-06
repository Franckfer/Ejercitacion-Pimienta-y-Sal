var express = require('express');
var app = express();

/* ENRUTADORES */
var indexRouter = require('./routes/index');

/* VISTAS */
app.set('view engine', 'ejs');

/* MIDDLEWARES */
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* RUTAS */
app.use('/', indexRouter);


var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(cookieParser());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
