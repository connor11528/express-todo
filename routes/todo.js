// var mongoose = require('mongoose'),
//     Todo = mongoose.model('Todo');

module.exports = {
    all: function(req, res){
        res.send('All todos')
    },
    create: function(req, res){
        console.log('Todo created')
    },
    destroy: function(req, res){
        console.log('Todo deleted')
    },
    edit: function(req, res){
        console.log('Todo updated')
    }

};