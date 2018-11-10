var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('./models/db');

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var assetsRouter = require('./routes/assets');
var eventsRouter = require('./routes/events');
var utilitiesRouter = require('./routes/utilities');
var eventregRouter = require('./routes/eventreg');


var app = express();
/// view engine setup

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/dist/outboxFront')));
  // Handle React routing, return all requests to React app
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/dist/outboxFront', 'index.html'));
  });
}else{
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
}

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/assets', assetsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/utilities', utilitiesRouter);
app.use('/api/eventreg', eventregRouter);



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