var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	app = express(),
    port = process.env.PORT || 3000;

// EXPRESS CONFIG
app.use(bodyParser())
app.use(express.static(__dirname + '/public'));

// ENVIRONMENT CONFIG
var mode = 'development'
var env = require('./server/config/environment')[mode]

// DATABASE
require('./server/config/mongoose')(env)

// ROUTES
require('./server/config/routes')(app)

// Start server
app.listen(port, function(){
  console.log('Server listening on port ' + port)
});