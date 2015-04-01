module.exports = {
	applicationPort 			: 80,
	database 					: function(){
		if(1==1){
			var opsworks = require('./../opsworks.js');
			var opsWorksDB = opsworks.db;
			var rdsConnection = {
				host					: opsWorksDB.host,
				port 					: opsWorksDB.port,
		  		database 				: opsWorksDB.database,
				user     				: opsWorksDB.username,
		 		password 				: opsWorksDB.password
			};
			return rdsConnection;
		} else {
			var local = require('./locals');
			var localConnection = local.db;
			return localConnection;
		}
	}
};
