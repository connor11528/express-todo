var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// todo model
var todoSchema = new Schema({
    user_id: String,
    content: String,
    updated_at: Date
});

module.exports = mongoose.model('Todo', todoSchema);