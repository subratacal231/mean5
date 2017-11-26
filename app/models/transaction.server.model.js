var sequelize = require('sequelize');

module.exports = function(Sequelize){
	var transaction = Sequelize.define('tbl_transaction', {
		id : {type : sequelize.INTEGER, primaryKey : true},
		trns_id : {type : sequelize.INTEGER, uniqueKey : true},
		u_name : sequelize.STRING,
		p_zone : sequelize.STRING,
		brand : sequelize.STRING,
		model : sequelize.STRING,
		qty : sequelize.INTEGER,
		amt : sequelize.FLOAT,
		trns_date : sequelize.DATE
	}, {freezeTableName: true});

	return transaction;
};