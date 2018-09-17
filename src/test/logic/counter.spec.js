let Counter = require('../../main/logic/counter');

describe('Test counter for correct initialization and counting with a random value', () => {
	test('Initiates with correct value.', () => {
		let randomValue1 = Math.floor(Math.random() * (9999));
		let testCounter1 = new Counter(randomValue1);
		expect(testCounter1.returnCurrentValueAndIncrementIt()).toBe(randomValue1);
	});
	test('Delivers correct counting.', () => {
		let randomValue2 = Math.floor(Math.random() * (9999));
		let testCounter2 = new Counter(randomValue2);
		expect(testCounter2.returnCurrentValueAndIncrementIt()).toBe(randomValue2);
		expect(testCounter2.returnCurrentValueAndIncrementIt()).toBe(randomValue2 + 1);
	});
});
