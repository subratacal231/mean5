var sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');

if(process.env.NODE_ENV === 'test'){
	var Sequelize = new sequelize('athena_test', 'root', 'admin',{host:'localhost',port:3306,dialect:'mysql'});
}
else{
	var Sequelize = new sequelize('athena', 'root', 'admin',{host:'localhost',port:3306,dialect:'mysql'});
}


var db = {};
db.models = {};
fs.readdir(__dirname, function(err, files){
	if(err){
		console.log('Failed to get the file names');
	}
	else{
		var modelName = '';
		files.forEach(function(file){
			if(file !== 'index.js'){
				modelName = file.slice(0, file.indexOf('.'));
				db.models[modelName] = Sequelize.import(path.join(__dirname, file));
			}
		});
		//console.log(db.models);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;