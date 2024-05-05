const request = require('request');
const url = 'http://localhost:7865';
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
