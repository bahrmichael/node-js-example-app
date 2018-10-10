let Appointment = require('../../../main/model/appointment');

//TODO: Dummy Test - Change later!

const mongoose = require('mongoose');

beforeAll(() => jest.doMock('mongoose', () => mongoose));
afterAll(() => mongoose.disconnect());

describe('Appointment Validator', () => {
	it('Validation should return errors for required fields.', function(done) {
		let testingAppointment = new Appointment();
		testingAppointment.validate(function(err) {
			expect(err.errors.startDate).toExist;
			expect(err.errors.endDate).toExist;
			expect(err.errors.name).toExist;
			expect(err.errors.location).toNotExist;
			done();
		});
	});
});
