var todo = require('../controllers/todo');

module.exports = function(router){
	// TODO API ROUTES (router has /api/ prefix)
	router.get('/', todo.all);
	router.post('/create', todo.create);
	router.get('/destroy/:id', todo.destroy);
	router.get('/edit/:id', todo.edit);
	router.post('/update/:id', todo.update);
}