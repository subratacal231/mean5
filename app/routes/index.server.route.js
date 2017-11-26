module.exports = function(app){
	var indexController = require('../controllers/index.server.controller');
	app.get('/alltransaction', indexController.getAllTransaction);
	app.get('/name/:name', indexController.getTransaction);

	app.get('*', function(req, res){
		console.log(app.get('_clientPath'));
		res.sendFile('index.html', { root: app.get('_clientPath')});
	});
};