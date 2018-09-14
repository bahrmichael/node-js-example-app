let Counter = require('../main/counter');

describe('Test counter for correct initialization and counting', () => {
	let randomValue = Math.floor(Math.random() * (9999));
	let testCounter = new Counter(randomValue);
	test('Initiates with correct value.', () => {
		expect(testCounter.countCounter()).toBe(randomValue);
	});
	test('Delivers correct counting.', () => {
		expect(testCounter.countCounter()).toBe(randomValue + 1);
	});
});
