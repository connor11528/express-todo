var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = 3000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// telling Express to serve static objects from the /public/ dir, but make it seem like the top level
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var main = require('./routes/index');
var todo = require('./routes/todo');
var todoRouter = express.Router();
app.use('/todo', todoRouter);

app.get('/', main.index);
todoRouter.get('/', todo.all);
todoRouter.post('/create', todo.create);
todoRouter.get('/destroy/:id', todo.destroy);
todoRouter.get('/edit/:id', todo.edit);

// Start server
app.listen(port, function(){
  console.log('Server listening on port ' + port)
});