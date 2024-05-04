const Utils = require('sinon');
const sinon = require('./utils');
// const assert = require('assert');
const { expect } = require("chai");
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  it('uses the calculateNumber method of Utils', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
