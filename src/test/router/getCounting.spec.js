let sinon = require('sinon');

let getCounting = require('../../main/router/getCounting');

describe("Counting Router", () => {
	it("should be called once.", () => {
		let req, res;

		req = res = {};
		let spy = res.json = sinon.spy();

		getCounting(req, res);
		expect(spy.calledOnce).toEqual(true);
	});
});
