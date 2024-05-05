const request = require('request');
const assert = require('assert');

describe('Index Page', function() {
  const url = 'http://localhost:7865';
  it('returns the correct status code and results', function(done) {
    request.get(url, function(err, res, body) {
      assert.strictEqual(err, null);

      assert.strictEqual(res.statusCode, 200);

      assert.strictEqual(body, 'Welcome to the payment system');

      done();
    });
  });
});
