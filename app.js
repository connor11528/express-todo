
/**
 * Module dependencies.
 */
require('./db');

var express = require('express');

var http = require('http');
var path = require('path');
var engine = require('ejs-locals');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));

// app.use(express.cookieParser()); // for cookies
app.use(express.bodyParser()); // add this before express.json()

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// todo routes
var routes = require('./routes');

app.get('/', routes.index);
app.post('/create', routes.create);
app.get('/destroy/:id', routes.destroy);
app.get('/edit/:id', routes.edit);
app.post('/update/:id', routes.update);

// twitter routes
var tweets = []; // model definition..
app.post('/send', function(req, res){
    if(req.body && req.body.tweet){
        tweets.push(req.body.tweet);
        res.send({status: 'ok', message:'tweet received!'})
    } else {
        // no tweet
        res.send({status: 'nok', message: 'tweet not received :('});
    }
});
app.get('/tweets', function(req, res){
    res.render('tweets',{
        tweets: tweets
    });
});

// create node.js server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
