var mongoose = require('mongoose');

module.exports = function(envConfig){
	// register models
	require('./models/Todo');

	// connect to database
	mongoose.connect(envConfig.database, function(){
		console.log('connected to database!')
	});

};