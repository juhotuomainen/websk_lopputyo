var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// sanakirjareitti käyttöön, tieto muuttujassa sanakirjarouter.
const sanakirjarouter = require('./routes/sanakirjaroute');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('html',
//require(ejs).renderFile);
// reittien maarittely
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// reittejä käyttöön app.usella
// ensiksi perusreitti (express-generaattorin luoma, indeksireitti)
app.use('/', indexRouter);
// sitten käyttäjäreitti (myös express-generaattorin luoma)
app.use('/users', usersRouter);
// sanakirjareitti käyttöön. Ensin heittomerkeissä reitti ja sitten sanakirjaroute-muuttujan nimi.
app.use('/sanakirja', sanakirjarouter);
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

app.listen(3000, () => {
    console.log('Palvelin käynnissä portissa 3000.');
});

module.exports = app;
