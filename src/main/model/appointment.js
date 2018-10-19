let mongoose = require('mongoose');

let appointmentSchema = new mongoose.Schema({
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	name: { type: String, required: true },
	location: { type: String }
});

appointmentSchema.methods.findOneByName = function (callback) {
	return this.model('Appointment').findOne({ name: this.name }, function(err, val) {
		callback(!!val);
	});
};

let Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
