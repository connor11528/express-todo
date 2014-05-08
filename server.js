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

// battleship routes
app.post('/battleship/register', function(req, res){
	console.log('hit the route')
	// send request to platform45 server
	request.post("http://battle.platform45.com/register", {form: { "name":"Your name", "email":"connorleech@gmail.com" } },
		function (err, httpResponse, body) {
		  if (err) {
		    return console.error('upload failed:', err);
		  }
		  console.log('Upload successful!  Server responded with:', body, ' httpResponse: ', httpResponse);
		});
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

// app.use(cookieParser()); // for cookies
