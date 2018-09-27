let Server = require('../main/server');

let request = require('supertest');
//request = request('http://localhost:1337');

describe('Doesnt initiate server if the configuration is bad', () => {
	it('Doesnt start the server with invalid port numbers', () => {
		let systemUnderTest = new Server();
		expect(() => {
			systemUnderTest.startServer(-1337);
		}).toThrow();
		expect(() => {
			systemUnderTest.startServer('fuck');
		}).toThrow();
	});

	it('Doesnt start the injectRoutes without a correct port', () => {
		let systemUnderTest = new Server();
		expect(() => {
			systemUnderTest.injectRoutes();
		}).toThrow();
		expect(systemUnderTest.port).toBe(undefined);
	});
});

describe('Test server features', () => {
	describe('Does initate and handle the server correctly', () => {
		// setup the Testserver...
		let systemUnderTest = new Server();
		systemUnderTest.startServer(1337);
		systemUnderTest.injectRoutes();

		it('sets port correctly', () => {
			expect(systemUnderTest.port).toEqual(1337);
		});

		it('responds with JSON', function(done) {
			request(systemUnderTest.app)
				.get('/api/counter')
				.expect('Content-Type', /json/)
				.expect(200, done);
		});

		it('api Counts in +1 increments', function(done) {
			request(systemUnderTest.app)
				.get('/api/counter')
				.expect(function(res) {
					let testingValue = res.body.counterValue;
					request(systemUnderTest.app).get('/api/counter').expect({
						counterValue: testingValue + 1
					}, done);
				})
				.end(done);
		});
		// ...and clean up the test server.
		systemUnderTest.closeServer();
	});

	it('Should close the server', function(done) {
		let systemUnderTest = new Server();
		() => {
			systemUnderTest.startServer(2048);
			systemUnderTest.injectRoutes();
			systemUnderTest.closeServer();
		};

		request(systemUnderTest.app)
			.get('/api/counter')
			.expect(404)
			.end(function(err, res) {
				if (err) return done(err);
				done();
			});
	});

	it('Should throw error if server has not been started yet', () => {
		let systemUnderTest = new Server();
		expect(() => {
			systemUnderTest.closeServer();
		}).toThrow();
	});
});
