let express = require('express');

class Server {
	constructor() {
		this.app = express();
	}
	startServer(portNumber) {
		if (typeof portNumber === 'number' && portNumber >= 0 && portNumber <= 65525) {
		// if port = 0  or if the port is ommitted it will automatically select a free port
			let port = process.env.PORT || portNumber;
			this.server = this.app.listen(port, function() {
				port = this.address().port;
				console.log('Express server listening on port ' + port + '.');
			});
			this.port = port;
		} else {
			throw new Error(portNumber + ' is an invalid port. The port must be a number and in the range [0, 65525]');
		}
	}
	injectRoutes() {
		if (typeof this.port === 'number' && this.port >= 0 && this.port <= 65525) {
			let api = require('./router/api');
			//call and mount the api to /api
			this.app.use('/api', api);
		} else {
			throw new Error('Port of startServer() not availaible. Could it not have been initated?');
		}
	}
	closeServer() {
		if (this.server !== undefined) {
			this.server.close();
			console.log('Express server closed. Port ' + this.port + ' now unavailable.');
		} else {
			throw new Error('Server not defined yet');
		}
	}
}

// Uncomment to spawn a server:

// let server = new Server();
// server.startServer(1337);
// server.injectRoutes();

module.exports = Server;
