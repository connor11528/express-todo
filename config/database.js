var mongoose = require('mongoose');

module.exports = function(env){

	

	mongoose.connect(env.database);

};