let mongoose = require('mongoose');

class Database {
	constructor() {
		mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
		let db = mongoose.connection;
		db.on('error', () => {
			throw new Error('Connection error');
		});
		db.once('open', () => {
			console.log("Connection successful!");
		});
	}
}

module.exports = Database;
