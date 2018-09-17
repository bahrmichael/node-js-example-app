let request = require('supertest');

request = request('http://localhost:1337');

describe('Test GET /api/counter for correct counting', () => {
	it('Responds with JSON', function(done) {
		request
			.get('/api/counter')
			.set('Accept', 'text/plain')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	it('Counts in +1 increments', function(done) {
		request.get('/api/counter', function(res) {
			let testingValue = res.body.counterValue;
			request.get('/api')
				.expect({ counterValue: testingValue + 1 }, done);
		}).end(function(err, res) {
			if (err) return done(err);
			done();
		});
	});
});
