let sinon = require('sinon');

let countingRoutes = require('../../main/router/countingRoutes');

describe("Counting Router", () => {
	it("Get Route should be called once.", () => {
		let req = {};
		let res = {};
		let spy = sinon.spy();
		res.json = spy;

		countingRoutes.getRoute(req, res);
		expect(spy.calledOnce).toEqual(true);
	});
});
