var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var { handleCors } = require('./middleware/cors');
var { handleAuth } = require('./middleware/auth');

var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var signinRouter = require('./routes/signin');
var signoutRouter = require('./routes/signout');
var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');

var app = express();

var NODE_ENV = require('./config')();

// DB initialization.
require('./db');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, NODE_ENV.STATIC_PATH)));

app.use(handleCors);

app.use(
  session({
    secret: 'codestates present',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 1000
    }
  })
);

app.use('/', indexRouter);

app.use('/signup', signupRouter);

app.use('/signin', signinRouter);

app.use('/signout', signoutRouter);

app.use('/users', usersRouter);

app.use('/todo', todosRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, NODE_ENV.STATIC_PATH));
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'develop' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
