let appointment = require('../logic/appointment');

class appointmentDAO {
	addDate(startDate, endDate, name, location) {
		let newDate = new appointment({
			startDate: startDate,
			endDate: endDate,
			name: name,
			location: location });
		newDate.save(function (err, appointment) {
			if (err) throw new Error('Couldnt save the appointment in the database');
			console.log(appointment.name + " saved in database");
		});
	}
	deleteDate() {}
	updateDate() {}
}

module.exports = appointmentDAO;
