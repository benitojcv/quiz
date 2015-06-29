var path = require('path');
var Sequelize = require('sequelize');

var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name  = (url[6] || null);
var user     = (url[2] || null);
var pwd      = (url[3] || null);
var protocol = (url[1] || null);
var dialect  = (url[1] || null);
var port     = (url[5] || null);
var host     = (url[4] || null);
var storage = process.env.DATABASE_STORAGE;

var sequelize = new Sequelize(DB_name, user, pwd, {
		dialect: protocol,
		protocol: protocol,
		port: port,
		host: host,
		storage: storage, // solo SQLite (.env)
		omitNull: true	  // solor Postgres
	});

var Quiz = sequelize.import(path.join(__dirname, 'quiz'));
var Comment = sequelize.import(path.join(__dirname, 'comment'));

// Relacion entre tablas
Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

exports.Quiz = Quiz;
exports.Comment = Comment;

// Inicializacion de la BBDD Quiz
sequelize.sync().then(function() {
	Quiz.count().then(function(count) {
		if (count === 0) {
			Quiz.create({
				pregunta: 'Capital de Italia',
				respuesta: 'Roma',
				tema: 'Humanidades'
			});
			Quiz.create({
				pregunta: 'Capital de Portugal',
				respuesta: 'Lisboa',
				tema: 'Humanidades'
			}).then(function() {
				console.log("Base de datos inicializada.");
			});
		}
	});
});

