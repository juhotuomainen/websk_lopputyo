var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// sanakirjareitti käyttöön, tieto muuttujassa sanakirjarouter.
//const sanakirjarouter = require('./routes/sanakirjaroute');
var app = express();
// ejs-moduuli käyttöön
//const js = require('ejs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('html',
require('ejs').renderFile);

// reittien maarittely
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// reittejä käyttöön app.usella
// ensiksi perusreitti (express-generaattorin luoma, indeksireitti)
app.use('/', indexRouter);
// sitten käyttäjäreitti (myös express-generaattorin luoma)
app.use('/users', usersRouter);
// sanakirjareitti käyttöön. Ensin heittomerkeissä reitti ja sitten sanakirjaroute-muuttujan nimi.
//app.use('/sanakirja', sanakirjarouterRouter);

// Kuunnellaan pyyntoja. Tassa hyodynnetaan listen-metodia, jolle valitetaan parametrina portti seka kalback-nuolifunktio, joka tulostaa portin konsoliin.
app.listen(3000,  () => {
// Tulostetaan viesti konsoliin kayttaen console.log:ia.
console.log('Palvelin käynnissä portissa 3000.');
});

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
