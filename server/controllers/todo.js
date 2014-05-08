var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

module.exports = {
    // all Todos
    all: function(req, res){
        res.json({ message: 'Welcome to our api all'})
        // // query db for all todo items
        // Todo.find(function(err, todos, count){
        //     res.render('index', { 
        //         title: 'Express Todo app',
        //         todos: todos, // pass todo items to page
        //         'header': header,
        //         stylesheets: ['/public/stylesheets/style.css']
        //     });
        // });
    },

    // create route
    create: function(req, res){
        res.json({ message: 'Welcome to create'})
        // new Todo({
        //     content: req.body.content,
        //     updated_at: Date.now()
        // })
        // .save(function(err, todo, count){
        //     if (err) return next(err);
            
        //     // redirect back to index page
        //     res.redirect('/');
        // });
    },

    // destroy route
    destroy: function(req, res){
        Todo.findById(req.params.id, function(err, todo){
            
            // delete from db    
            todo.remove(function(err, todo){
                if(err) return next(err);
                
                res.redirect('/');
            });
        });
    },

    // edit route
    edit: function(req, res){
        Todo.find(function(err, todos){
            if(err) return next(err);
            
            res.render('edit', {
                title: 'edit todo',
                todos: todos,
                current: req.params.id
            });
        });
    },

    update: function(req, res){
            
        Todo.findById(req.params.id, function(err, todo){
            todo.content = req.body.content;
            todo.updated_at = Date.now();
            todo.save(function(err, todo, count){
                if(err) return next(err);
                
                res.redirect('/');
            });
        });
    }

}