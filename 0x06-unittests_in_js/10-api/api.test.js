const request = require('request');
const url = 'http://localhost:7865';
const { expect } = require('chai');
const assert = require('assert');

describe('Index Page', function() {
  it('returns the correct status code and results', function(done) {
    request.get(url, function(err, res, body) {
      assert.strictEqual(err, null);

      assert.strictEqual(res.statusCode, 200);

      assert.strictEqual(body, 'Welcome to the payment system');

      done();
    });
  });
});

describe('Cart Page', function() {
  it('returns the correct status code and result when :id is a number', function(done) {
    const cart_id = 20;
    request.get(`${url}/cart/${cart_id}`, function(err, res, body) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(body, `Payment methods for cart ${cart_id}`);
      done();
    });
  });

  it('returns 404 status code when :id is NOT a number', function(done) {
    const invalidCart_id = 'about';
    request.get(`${url}/cart/${invalidCart_id}`, function(err, res, body) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  });
});

describe('Available Payments', function() {
  it('returns correct status code and result for /available_payments endpoint', function(done) {
    request.get(`${url}/available_payments`, function(err, res, body) {      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
})
      
describe('Login Endpoint', function(done) {
  it('returns correct status code and result for /login endpoint', function(done) {
    const userName = 'Betty';
    const reqBody = { userName };

    request.post(
      {
        url: `${url}/login`,
        json: reqBody,
      },
      function(err, res, body) {
        assert.strictEqual(err, null);
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(body, `Welcome ${userName}`);
        done();
      }
    );
  });
});
