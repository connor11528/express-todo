
module.exports = {
	index: function(req, res) {
		res.render('main', { title: 'Express Todo' });
	}
};