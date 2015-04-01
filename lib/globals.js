module.exports = {
	applicationPort 			: 80,
	database 					: function(){
		if(process.env.ENVIRONMENT){
			var opsworks = require('./../opsworks.js');
			var opsWorksDB = opsworks.db;
			var rdsConnection = {
				// host					: opsWorksDB.host,
				// port 					: opsWorksDB.port,
		        // database 				: opsWorksDB.database,
				// user     				: opsWorksDB.username,
		     	// password 				: opsWorksDB.password

			host					: 'photoalbums1.cgbm4gyusuac.us-west-2.rds.amazonaws.com',
			port 					: '3306',
			database 				: 'photoalbums',
			user     				: 'admin',
			password 				: '11111111'
			};
			return rdsConnection;
		} else {
			var local = require('./locals');
			var localConnection = local.db;
			return localConnection;
		}
	}
};
