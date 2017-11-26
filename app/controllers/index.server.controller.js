var allModel = require('../models');

exports.getAllTransaction = function(req, res){

	allModel.models.transaction.findAll({attributes: ['id','trns_id','u_name','p_zone','brand','model','qty','amt','trns_date']})
	.then(function(transaction){
		res.send(transaction);
	}).
	catch(function(){
		console.log('failed');
	});
};

exports.getTransaction = function(req, res){
	allModel.models.transaction.find({where:{u_name: req.params.u_name}, 
									attributes: ['id','trns_id','u_name','p_zone','brand','model','qty','amt','trns_date']})
	.then(function(transaction){
		console.log(transaction);
	})
	.catch(function(err){
		console.log(err);
	});
};