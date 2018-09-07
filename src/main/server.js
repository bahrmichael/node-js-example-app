let app = require('./app');
let port = process.env.PORT || 5555;

let server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});
