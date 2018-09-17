let express = require('express');
let app = express();

let api = require('./router/api');

//call and mount the api to /api
app.use('/api', api);

// if port = 0  or if the port is ommitted it will automatically select a free port
let port = process.env.PORT || 1337;

let server = app.listen(port, function() {
	port = this.address().port;
	console.log('Express server listening on port ' + port);
});

module.exports = server;
module.exports = app;
