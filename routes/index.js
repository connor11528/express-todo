var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

// index route
exports.index = function(req, res){
    
    var header = 'Welcome to an express application running with Node.js';
    
    // query db for all todo items
    Todo.find(function(err, todos, count){
        res.render('index', { 
            title: 'Express Todo app',
            todos: todos, // pass todo items to page
            'header': header,
            stylesheets: ['/public/stylesheets/style.css']
        });
    });
};

// create route
exports.create = function(req, res){
    new Todo({
        content: req.body.content,
        updated_at: Date.now()
    })
    .save(function(err, todo, count){
        if (err) return next(err);
        
        // redirect back to index page
        res.redirect('/');
    });
};

// destroy route
exports.destroy = function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        
        // delete from db    
        todo.remove(function(err, todo){
            if(err) return next(err);
            
            res.redirect('/');
        });
    });
};

// edit route
exports.edit = function(req, res){
    Todo.find(function(err, todos){
        if(err) return next(err);
        
        res.render('edit', {
            title: 'edit todo',
            todos: todos,
            current: req.params.id
        });
    });
};

exports.update = function(req, res){
        
    Todo.findById(req.params.id, function(err, todo){
        todo.content = req.body.content;
        todo.updated_at = Date.now();
        todo.save(function(err, todo, count){
            if(err) return next(err);
            
            res.redirect('/');
        });
    });
};








