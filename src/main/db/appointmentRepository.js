let Appointment = require('../model/appointment');

class AppointmentRepository {
	addOne(startDate, endDate, name, location) {
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
	findByName(name)  {
		Appointment.findByName({ name: name }, function(err, appointments) {
			return appointments;
		});
	}
	deleteByName(name) {}
	findByNameAndUpdate(name) {}
	readByName(name) {}
}

module.exports = AppointmentRepository;
