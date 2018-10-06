let mongoose = require('mongoose');

let dateSchema = new mongoose.Schema({
	startDate: Date,
	endDate: Date,
	name: String,
	location: String
});

let date = mongoose.model('Date', dateSchema);

module.exports = { date, dateSchema };
