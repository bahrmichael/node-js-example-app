// Dummy testing only
// TODO: add real ones!

let mongoose = require('mongoose');
let MongodbMemoryServer = require('mongodb-memory-server');

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;
let opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above

async () => {
	mongoServer = new MongodbMemoryServer();
	let mongoUri = await mongoServer.getConnectionString();
	await mongoose.connect(mongoUri, opts, (err) => {
		if (err) console.error(err);
	});
};

() => {
	mongoose.disconnect();
	mongoServer.stop();
};

describe('Exampletest', () => {
	it("...", () => {
		expect(true).toBe(true);
	});
});
