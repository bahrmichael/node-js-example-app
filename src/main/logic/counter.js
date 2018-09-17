class Counter {
	constructor(startValue) {
		this._value = startValue;
	}
	returnCurrentValueAndIncrementIt() {
		return this._value++;
	}
}

module.exports = Counter;
