let getCounting = function(req, res) {
	let Counter = require('../logic/counter');
	let counter = new Counter(0);

	res.json({ counterValue: counter.returnCurrentValueAndIncrementIt() });
};

module.exports = getCounting;
