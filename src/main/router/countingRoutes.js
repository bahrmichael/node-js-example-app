let Counter = require('../logic/counter');
let counter = new Counter(0);

let getRoute = function(req, res) {
	res.json({ counterValue: counter.returnCurrentValueAndIncrementIt() });
};

module.exports = { getRoute };
