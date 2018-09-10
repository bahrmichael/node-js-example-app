let express = require('express');
let app = require('./app');

let counterValue = 0;

// set the port
let port = process.env.PORT || 1337;

// get an instance of the express Router
let router = express.Router();

// logging routine
router.use(function(req, res, next) {
	console.log('API accessed');
	next();
});

//test route (accessed at GET http://localhost:1337/api)
router.get('/', function(req, res) {
	res.json({ cValue: counterValue.toString() });
	counterValue++;
});

app.use('/api', router);
let server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});

module.exports = server;
