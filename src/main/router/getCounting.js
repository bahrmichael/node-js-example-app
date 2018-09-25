let Counter = require('../logic/counter');
let counter = new Counter(0);

let getCounting = function(req, res) {
	res.json({ counterValue: counter.returnCurrentValueAndIncrementIt() });
};

module.exports = getCounting;
