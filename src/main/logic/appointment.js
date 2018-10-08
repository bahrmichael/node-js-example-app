let mongoose = require('mongoose');

let appointmentSchema = new mongoose.Schema({
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	name: { type: String, required: true },
	location: { type: String }
});

let appointment = mongoose.model('Date', appointmentSchema);

module.exports = appointment;
