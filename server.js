process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');

var app = express();

app.listen(2900);
//console.log(__dirname);
//return app; //Open it when testing is needed
console.log('Server running at port 2900');