let Appointment = require('../../../main/model/appointment');

const mongoose = require('mongoose');
// const sinon = require('sinon');

beforeAll(() => jest.doMock('mongoose', () => mongoose));
afterAll(() => mongoose.disconnect());

describe('Appointment Validator', () => {
	test('Validation should return errors for required fields.', function(done) {
		let testingAppointment = new Appointment();
		testingAppointment.validate(function(err) {
			expect(err.errors.startDate).toExist;
			expect(err.errors.endDate).toExist;
			expect(err.errors.name).toExist;
			expect(err.errors.location).not.toExist;
			done();
		});
	});
	test('Test for validation of correct types', function(done) {
		let testDate = new Date();
		let testString = new String();
		let testingAppointment = new Appointment(testDate, testDate, testString, testString);
		testingAppointment.validate(function(err) {
			expect(err.errors.startDate).not.toExist;
			expect(err.errors.endDate).not.toExist;
			expect(err.errors.name).not.toExist;
			expect(err.errors.location).not.toExist;
			done();
		});
	});
	test('Should not create an Appointment with incorrect types', function(done) {
		let wrongTestDate = { blubb: 'blubb' };
		let wrongTestString = 12345;
		let testingAppointment = new Appointment(wrongTestDate, wrongTestDate, wrongTestString, wrongTestString);
		testingAppointment.validate(function(err) {
			expect(err).toBe(null);
			done();
		});
	});

	// test('Should call findOne while using findOneByName', function() {
	// 	let testName = "testName";
	// 	let testDate = new Date();
	//
	// 	sinon.stub(Appointment, "findOne").yields(null, testName);
	//
	// 	let testingAppointment = new Appointment(testDate, testDate, testName);
	//
	// 	testingAppointment.findOneByName(function(err, testName) {});
	// 	sinon.assert.calledWith(Appointment.findOne, { name: testName });
	//
	// 	Appointment.findOne.restore();
	// });
});
