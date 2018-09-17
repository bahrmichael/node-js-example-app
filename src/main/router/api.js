let express = require('express');
let router = express.Router();

router.use(function(req, res, next) {
	console.log('/api was accessed.');
	next();
});

let Counter = require('../logic/counter');
let counter = new Counter(0);

//route counter - accessed at GET http://localhost:1337/api/counter)
router.get('/counter', function(req, res) {
	console.log('/api/counter was accessed.');
	res.json({ counterValue: counter.returnCurrentValueAndIncrementIt() });
});

module.exports = router;
