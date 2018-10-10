let Appointment = require('../model/appointment');

class AppointmentRepository {
	addDate(startDate, endDate, name, location) {
		const newDate = new Appointment({
			startDate: startDate,
			endDate: endDate,
			name: name,
			location: location });
		newDate.save(function (err, appointment) {
			if (err) throw new Error('Couldn\'t save the appointmentRepository in the database');
			console.log(appointment.name + " saved in database");
		});
	}
	deleteDate() {}
	updateDate() {}
	readDate() {}
}

module.exports = AppointmentRepository;
