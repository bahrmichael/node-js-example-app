let express = require('express');

class Server {
	constructor() {
		this.app = express();
	}
	startServer(portNumber) {
		if (typeof portNumber === 'number' && portNumber >= 0 && portNumber <= 65525) {
		// if port = 0  or if the port is ommitted it will automatically select a free port
			this.port = process.env.PORT || portNumber;
			this.server = this.app.listen(this.port, function() {
				this.port = this.address().port;
				console.log('Express server listening on port ' + this.port + '.');
			});
		} else {
			throw new Error('invalid portNumber');
		}
	}
	routeAPI() {
		if (typeof this.port === 'number' && this.port >= 0 && this.port <= 65525) {
			let api = require('./router/api');
			//call and mount the api to /api
			this.app.use('/api', api);
		} else {
			throw new Error('startServer not called');
		}
	}
	closeServer() {
		this.server.close();
		console.log('Express server closed. Port ' + this.port + ' now unavaillable.');
	}
}

// Uncomment to spawn a server:

// let server = new Server();
// server.startServer(1337);
// server.routeAPI();

module.exports = Server;
