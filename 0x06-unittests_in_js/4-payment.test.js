const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment.js");
const Utils = require("./utils.js");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("this checks that Utils.calculateNumber is stubbed", function() {
	const stub = sinon.stub(Utils, "calculateNumber").returns(10);
	const spy = sinon.spy(console, "log");
        sendPaymentRequestToApi(100, 20);

	sinon.assert.calledWith(spy,'The total is: 10');
	sinon.assert.calledWith(stub, "SUM", 100, 20);

	stub.restore();
	spy.restore();
    });
});
