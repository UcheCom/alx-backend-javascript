const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("this checks that Utils.calculateNumber was called once", function() {
	const stub = sinon.stub(Utils, "calculateNumber").return(10);
	const spy = sinon.spy(console, "log");

	sendPaymentRequestToApi(100, 20);

	assert(spy.withArgs('The total is: 10').calledOnce);
	assert(stub.withArgs("SUM", 100, 20).calledOnce);

	stub.restore();
	spy.retore();
    });
});
