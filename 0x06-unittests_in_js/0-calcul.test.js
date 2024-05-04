const assert = require('assert');
const calculateNumber = require('./0-calcul.js');


describe('calculateNumber', () => {
  it('this returns the sum of two rounded numbers', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(3.4, 5.7), 9);
  });

  it('this adds up a and b numbers correctly', () => {
    assert.equal(calculateNumber(4, 6), 10);
    assert.equal(calculateNumber(3, 4), 7);
  });
  
  it('this rounds b and gives the correct sum', () => {
    assert.equal(calculateNumber(3, 3.7), 7);
    assert.equal(calculateNumber(7, 2.5), 10);
  });

  it('this rounds a and gives the correct sum', () => {
    assert.equal(calculateNumber(3.7, 3), 7);
    assert.equal(calculateNumber(3.8, 5), 9);
  });

});
