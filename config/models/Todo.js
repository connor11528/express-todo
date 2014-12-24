var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// todo model
var todoSchema = new Schema({
    content: String,
    completed: { type: Boolean, default: false },
    updated_at: { type: Date, default: Date.now }
});

mongoose.model('Todo', todoSchema);