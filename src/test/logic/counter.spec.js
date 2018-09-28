let Counter = require('../../main/logic/counter');

describe('Test counter for correct initialization and counting with a random value', () => {
	test('Initiates with correct value.', () => {
		let randomValue = Math.floor(Math.random() * (9999));
		let testCounter = new Counter(randomValue);
		expect(testCounter.returnCurrentValueAndIncrementIt()).toBe(randomValue);
	});
	test('Delivers correct counting.', () => {
		let randomValue = Math.floor(Math.random() * (9999));
		let testCounter = new Counter(randomValue);
		expect(testCounter.returnCurrentValueAndIncrementIt()).toBe(randomValue);
		expect(testCounter.returnCurrentValueAndIncrementIt()).toBe(randomValue + 1);
	});
});
