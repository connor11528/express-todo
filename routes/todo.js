var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

module.exports = {
    all: function(req, res){
        Todo.find({}, function(err, todos){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});

            res.render('todos', { todos: todos });
        });
    },
    viewOne: function(req, res){
        console.log(req.params.id);
    },
    create: function(req, res){
        var todoContent = req.body.content;
        // create todo
        Todo.create({ content: todoContent }, function(err, todo){
            if(err) res.render('error', { error: 'Error creating your todo :('})
            
            res.redirect('/todos');
        });
    },
    destroy: function(req, res){
        console.log('Todo deleted')
    },
    edit: function(req, res){
        console.log('Todo updated')
    }

};