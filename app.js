var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const expHbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var createRouter = require('./routes/create');
var detailsRouter = require('./routes/details');
var createAccRouter = require('./routes/createAccessory');
var attachAccRouter = require('./routes/attachAccessory');
// var _404Router = require('./routes/_404');

var app = express();

// view engine setup
app.engine('hbs', expHbs({
  defaultLayout: '',
  extname: '.hbs',
  partialsDir:__dirname+'/views/partials'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/create', createRouter);
app.use('/details', detailsRouter);
app.use('/create/accessory', createAccRouter);
app.use('/attach/accessory', attachAccRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404');
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


// mongoDB connection
mongoose
    .connect(
      "mongodb+srv://atlasAdmin:abcde12345@cluster0.g2ipk.mongodb.net/cubeWorkshop?retryWrites=true&w=majority",
      {
        dbName: "cubeWorkshop",
        user: "atlasAdmin",
        pass: "abcde12345",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((res) => console.log("db connected"))
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Testing Mongoose db.once method");
  });

module.exports = app;
