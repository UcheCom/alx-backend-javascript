const getPaymentTokenFromAPI = require('./6-payment_token.js');
const { expect } = require('chai');

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)
	  .then((data) => {
            expect(data).to.have.Property('data');
	    done();
	  });
    });
});
