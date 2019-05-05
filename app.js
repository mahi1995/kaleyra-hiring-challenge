var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index.route');
var authRouter = require('./routes/auth.route');
var emergencyRouter = require('./routes/emergency.route');
var profileRouter = require('./routes/profile.route');

const PORT = require('./config/index.config').PORT
const DB_URL = require('./config/index.config').DB_URL

mongoose.connect(DB_URL,{useNewUrlParser:true}).then(()=>{
  console.log(`connected to db=> ${DB_URL}`)
}).catch((err)=>{
  console.log(`unable to connect to db...${err}`)
})

mongoose.connection.on('disconnected',()=>{
  console.log('db disconnected...')
})
var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/views'));

app.use('/auth',authRouter );
app.use('/', indexRouter);
app.use('/emergency', emergencyRouter);
app.use('/profile',profileRouter);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error'); 
});

app.listen(PORT,()=>{
  console.log(`app is runnin @ port ${PORT}`)
})
