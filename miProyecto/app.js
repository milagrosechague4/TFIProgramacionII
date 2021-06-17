var createError = require('http-errors');
var express = require('express');
var path = require('path');
<<<<<<< HEAD
var cookieParser = require('cookie-parser');
var session = require('express-session');
=======
>>>>>>> 5d533d9e0b0fb4ee8cb208f40fb87baba4f6f38c
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var app = express();
let session = require('express-session')
let cookieParser = require('cookie-parser')

//Implementando express-session
app.use(session({
  secret: 'animales',
  resave: false,
  saveUninitialized: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  { secret:'petfinder',
    resave: false,
    saveUninitialized: true }
));

app.use(function(req,res,next){
  console.log(req.cookies.usuarioId+'------------------------------');
  
  if(req.session.usuario === undefined && req.cookies.usuarioId != undefined){
    usuario.findByPk(req.cookies.usuarioId)
    .then(usuario =>{
      req.session.usuario = usuario
     next()
    })
  }else{
    next()
  }
})

//Middleware
app.use(function(req,res,next){
  
  if(req.session.usuario != undefined){
    res.locals.user = req.session.usuario;
    console.log(res.locals.usuario.nombre+'------------------------------');
  }
  next();
})



app.use(express.static(path.join(__dirname, 'public')));

//cuando pongo localhost:3000/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

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
