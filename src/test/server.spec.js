let request = require('supertest');

request = request('http://localhost:1337');

describe('Test GET /api for correct counting', () => {
	it('Responds with JSON', function(done) {
		request
			.get('/api')
			.set('Accept', 'text/plain')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	// let testingValue1;
	// let testingValue2;
	//
	// // TODO: fix NaN problem of counterValue
	// it('Counts in +1 increments', function(done) {
	// 	request.get('/api', function(req, res) {
	// 		testingValue1 = res.body.counterValue;
	// 	});
	// 	request.get('/api', function(req, res) {
	// 		testingValue1 = res.body.counterValue;
	// 	});
	// 	expect(testingValue2 - testingValue1).toBe(1);
	// });
});
