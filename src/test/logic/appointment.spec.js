let appointment = require('../../main/logic/appointment');

//TODO: Dummy Test - Change later!

describe('appointment test', () => {
	it('should be invalid if invoked empty', function(done) {
		let testingAppointment = new appointment();
		testingAppointment.validate(function(err) {
			expect(err.errors.startDate).toExist;
			expect(err.errors.endDate).toExist;
			expect(err.errors.name).toExist;
			done();
		});
	});
});
