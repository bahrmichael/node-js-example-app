let Server = require('../main/server');
let server = new Server();

let request = require('supertest');
//request = request('http://localhost:1337');

describe('Test server features', () => {
	it('Doesnt initiate Server incorrectly', () => {
		expect(() => {
			server.startServer(-1337);
		}).toThrow();
		expect(() => {
			server.startServer('fuck');
		}).toThrow();
		expect(() => {
			server.routeAPI();
		}).toThrow();
		expect(server.port).toBe(undefined);
	});

	it('Does initate Server correctly', () => {
		server.startServer(1337);
		server.routeAPI();
		expect(server.port).toEqual(1337);
	});

	describe('Mount /api/counter correctly', () => {
		it('and responds with JSON', function(done) {
			request(server.app)
				.get('/api/counter')
				.set('Accept', 'text/plain')
				.expect('Content-Type', /json/)
				.expect(200, done);
		});

		it('api Counts in +1 increments', function(done) {
			request(server.app)
				.get('/api/counter', function(res) {
					let testingValue = res.body.counterValue;
					console.log(testingValue);
					request(server.app)
						.get('/api/counter')
						.expect({ counterValue: testingValue + 1 }, done);
				})
				.end(done);
		});
	});

	it('Should close the server', function(done) {
		server.closeServer();
		request(server.app)
			.get('/api')
			.expect(404)
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
	});
});
