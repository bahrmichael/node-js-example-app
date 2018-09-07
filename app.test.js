const app = require('./app.js');
let request = require('supertest');

// Just a simple initial unit test
test('Adds 1 to the counter and removes it again', () => {
	let initialValue = app.counter;
	app.addOne();
	expect(app.counter.toBe(initialValue + 1));
	app.removeOne();
	expect(app.counter.toBe(initialValue));
});

request = request('http://localhost:5555');

test('Tests the availability of the local server', () => {
	request.get('/').expect(200, function(err) {
		console.log(err);
	});
});
