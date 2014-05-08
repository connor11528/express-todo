var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request')

var app = express(),
    port = process.env.PORT || 3000;

// Express config
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

// Database
var db = require('./server/config/db');

// Routes
var router = express.Router();

// enable CORS
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

// battleship routes
app.post('/battleship/register', function(req, res){
	// send request to platform45 server
	request("http://battle.platform45.com/register", function(err, res, body){
		if (!err && res.statusCode == 200){
			console.log('worked!: ', body)
		} else {
			console.log(err)
		}
	})
})

// API routes
require('./server/routes/api')(router);
app.use('/api', router);    // all routes prefixed with 'api'

// Angular routing
app.get('/*', function(req, res){
	res.sendfile('./public/index.html');
})

// Start server
app.listen(port, function(){
  console.log('Server listening on port ' + port);
});


// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
// app.use(favicon());
// app.use(logger('dev'));
// app.use(cookieParser()); // for cookies
// app.use(urlencoded());
// app.use(methodOverride());
// app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }