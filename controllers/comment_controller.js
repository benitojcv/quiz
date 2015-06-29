var models = require('../models/models.js');

exports.new = function(req, res) {
	console.log("***Nuevo comentario");
	res.render('comments/new', {
		quizid: req.params.quizId, 
		errors: []
	});
};

exports.create = function(req, res) {
	var comment = models.Comment.build({
		texto: "TODO"
	});
};