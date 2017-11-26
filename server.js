process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');

var app = express();

app.listen(2900);
//console.log(__dirname);
module.exports = app; //Open it when testing is needed.With this mocha test will fail
console.log('Server running at port 2900');