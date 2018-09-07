//const app = require('./app.js');
let request = require('supertest');

request = request('http://localhost:5555');

test('Tests the availability of the local server', () => {
	request.get('/').expect(200, function(err) {
		console.log(err);
	});
});
