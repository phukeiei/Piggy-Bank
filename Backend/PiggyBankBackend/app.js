var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
const accountRouter = require('./routes/accountRouter')
const financialCategoryRouter = require('./routes/financialCategoryRouter')
const financeRouter = require('./routes/financeRouter')
const financialCategoryAccountRouter = require('./routes/financialCategoryAccountRouter')

var app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/category', financialCategoryRouter);
app.use('/finance', financeRouter);
app.use('/financialCategoryAccount', financialCategoryAccountRouter);

module.exports = app;
