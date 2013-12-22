var utils = require('../utils');
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

// index route
exports.index = function(req, res){
    //cookies
    var user_id = req.cookies ?
        req.cookies.user_id : undefined;
        
    // query db for all todo items
    Todo.find(function(err, todos, count){
        res.render('index', { 
            title: 'Express Todo app',
            todos: todos // pass todo items to page
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
        // redirect back to index page
        res.redirect('/');
    });
};

// destroy route
exports.destroy = function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        todo.remove(function(err, todo){
            res.redirect('/');
        });
    });
};

// edit route
exports.edit = function(req, res){
    Todo.find(function(err, todos){
        res.render('edit', {
            title: 'edit todo',
            todos: todos,
            current: req.params.id
        });
    });
};

exports.update = function(req, res){
    //cookies
    var user_id = req.cookies ?
        req.cookies.user_id : undefined;
        
    Todo.findById(req.params.id, function(err, todo){
        todo.content = req.body.content;
        todo.updated_at = Date.now();
        todo.save(function(err, todo, count){
            res.redirect('/');
        });
    });
};

exports.current_user = function(req, res, next){
    var user_id = req.cookies ?
        req.cookies.user_id : undefined;
    
    if(!user_id){
        res.cookie('user_id', utils.uid(32))
    }
    
    next();
};









