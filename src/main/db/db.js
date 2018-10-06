let mongoose = require('mongoose');
// let dateDAO = require('../DAO/dateDAO');

class database {
	constructor() {
		mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
		let db = mongoose.connection;
		db.on('error', () => {
			throw new Error('Connection error');
		});
		db.once('open', () => {
			console.log("Connection successful!");
		});
	}
}

module.exports = database;
