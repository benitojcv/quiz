var models = require('../models/models.js');

exports.new = function(req, res) {
	res.render('comments/new', {
		quizid: req.params.quizId, 
		errors: []
	});
};

exports.create = function(req, res) {
	var comment = models.Comment.build({
		texto: req.body.comment.texto,
		QuizId: req.params.quizId
	});
	
	console.log(comment);
	
	comment
	.validate().then(function(err) {
		if (err) {
			console.error("ERROR:" + err.errors);
			
			res.render('comments/new', { 
				comment: comment, 
				errors: err.errors,
				quizid: req.params.quizId
			});
		} else {
			
			comment
			.save().then(function() {
				console.log("Insertado!!!");
				res.redirect('/quizes/' + req.params.quizId);
			});			
		}
	}).catch(function(error) {
		next(error);
	});
};