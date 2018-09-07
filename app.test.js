const app = require('./app.js');

// Just a simple initial unit test
test('Adds 1 to the counter and removes it again', () => {
	let initialValue = app.counter;
	app.addOne();
	expect(app.counter.toBe(initialValue + 1));
	app.removeOne();
	expect(app.counter.toBe(initialValue));
});
