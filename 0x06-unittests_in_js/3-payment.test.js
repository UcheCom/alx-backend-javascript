const Utils = require('sinon');
const sinon = require('./utils');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
