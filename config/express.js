var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var session = require('express-session');

module.exports = function(){
	var app = express();
	if(process.env.NODE_ENV === 'development'){
		var config = require('./env/' + process.env.NODE_ENV); //to set the NODE_ENV run command "set NODE_ENV = development"
		app.use(morgan('dev'));
	}
	else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	var rootPath = path.resolve(__dirname, '..'); 	//getting the path till root folder 
	var clientPath = path.join(rootPath, 'client'); //getting the path till root folder/client 

	app.set('_clientPath', clientPath);				//setting the client folder path in a variable for later use

	app.use(express.static(clientPath));			//setting the client folder path for static files

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());

	app.use(methodOverride());

	app.use(session({saveUninitialized: true,
					resave: true,
					secret: config.sessionSecret}));

	require('../app/routes/index.server.route')(app); 
	
	return app;
};