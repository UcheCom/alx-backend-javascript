const request = require('request');
const api_url = 'http://localhost:7865';
const assert = require('assert');

describe('Index Page', function() {
  it('returns the correct status code and results', function(done) {
    request.get(api_url, function(err, res, body) {
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
    request.get(`${api_url}/cart/${cart_id}`, function(err, res, body) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(body, `Payment methods for cart ${cart_id}`);
      done();
    });
  });

  it('returns 404 status code when :id is NOT a number', function(done) {
    const invalidCart_id = 'about';
    request.get(`${api_url}/cart/${invalidCart_id}`, function(err, res, body) {
      assert.strictEqual(err, null);
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  });
});

describe('Available Payments', function() {
  it('returns correct status code and result', function(done) {
    request.get(`${api_url}/available_payments`, function(err, res, body) {
      assert.strictEqual(er, null);
      assert.strictEqual(res.statusCode, 200);
      const eResult = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        },
      };
      assert.deepStrictEqual(JSON.parse(body), eResult);
      done();
    });
  });
});

describe('Login Endpoint', function() {
  it('should return correct status code and result for /login endpoint', function(done) {
    const userName = 'Betty';
    const reqBody = { userName };

    request.post(
      {
        url: `${api_url}/login`,
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
