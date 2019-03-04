var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbrs = require('express-handlebars');

var indexRouter = require('./routes/index');

var app = express();

app.engine('handlebars', exphbrs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
