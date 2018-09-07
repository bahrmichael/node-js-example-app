//const app = require('./app.js');
let request = require('supertest');

// Just a simple initial unit test
test('Emptyy test', () => {
	expect(true).toBe(true);
});

request = request('http://localhost:5555');

test('Tests the availability of the local server', () => {
	request.get('/').expect(200, function(err) {
		console.log(err);
	});
});
