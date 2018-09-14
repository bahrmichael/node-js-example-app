let express = require('express');
// get an instance of the express Router
let router = express.Router();

let app = require('./app');

// if port = 0  or if the port is ommitted it will automatically select a free port
let port = process.env.PORT || 1337;

// logging routine
router.use(function(req, res, next) {
	console.log('API accessed');
	next();
});

// initiate counter starting value
let counterValue = 0;

//test route (accessed at GET http://localhost:1337/api)
router.get('/', function(req, res) {
	res.json({ counterValue: counterValue.toString() });
	counterValue++;
});

app.use('/api', router);

let server = app.listen(port, function() {
	port = this.address().port;
	console.log('Express server listening on port ' + port);
});

module.exports = server;
