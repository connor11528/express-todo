var mongoose = require('mongoose'),
	Schema = mongoose.Schema

module.exports = function(env){

	// todo model
	var todoSchema = new Schema({
	    user_id: String,
	    content: String,
	    updated_at: Date
	});

	var Todo = mongoose.model('Todo', todoSchema)

	mongoose.connect(env.database);

}
