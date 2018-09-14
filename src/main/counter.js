class Counter {
	constructor(startValue) {
		this._value = startValue;
	}
	countCounter() {
		let currentValue = this._value;
		this._value++;
		return currentValue;
	}
}

module.exports = Counter;
