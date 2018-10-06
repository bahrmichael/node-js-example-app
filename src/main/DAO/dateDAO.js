let date = require('../logic/date');

class dateDAO {
	addDate(startDate, endDate, name, location) {
		let newDate = new date({
			startDate: startDate,
			endDate: endDate,
			name: name,
			location: location });
		newDate.save(function (err, date) {
			if (err) throw new Error('Couldnt save the date in the database');
			console.log(date.name + " saved in database");
		});
	}
	deleteDate() {}
	updateDate() {}
}

module.exports = dateDAO;
