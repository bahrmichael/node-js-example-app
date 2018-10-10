/**
 * @jest-environment <rootDir>/src/test/mongo-environment.js
 */

//let mongoose = require('mongoose');
let { MongoClient } = require('mongodb');

let connection;
let db;

beforeAll(async () => {
	connection = await MongoClient.connect(global.__MONGO_URI__);
	db = await connection.db(global.__MONGO_DB_NAME__);
});

afterAll(async () => {
	await connection.close();
});

test('should aggregate docs from collection', async () => {
	const appointments = db.collection('appointments');

	await appointments.insertMany([
		{
			type: 'Document'
		}, {
			type: 'Video'
		}, {
			type: 'Image'
		}, {
			type: 'Document'
		}, {
			type: 'Image'
		}, {
			type: 'Document'
		}
	]);

	const topFiles = await appointments.aggregate([
		{
			$group: {
				_id: '$type',
				count: {
					$sum: 1
				}
			}
		}, {
			$sort: {
				count: -1
			}
		}
	]).toArray();

	expect(topFiles).toEqual([
		{
			_id: 'Document',
			count: 3
		}, {
			_id: 'Image',
			count: 2
		}, {
			_id: 'Video',
			count: 1
		}
	]);
});
