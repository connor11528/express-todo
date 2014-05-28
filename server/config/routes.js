var express = require('express'),
	todo = require('../routes/todo')

module.exports = function(app){

	// TODO API
	var router = express.Router();
	router.get('/', todo.all);
	router.post('/create', todo.create);
	router.get('/destroy/:id', todo.destroy);
	router.get('/edit/:id', todo.edit);
	router.post('/update/:id', todo.update);
	
	app.use('/api/todos', router);    // all routes prefixed with 'api/todos'

	// Angular routes
	app.get('/*', function(req, res){
		res.sendfile('./public/index.html')
	})

}


