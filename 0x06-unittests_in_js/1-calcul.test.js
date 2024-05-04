const assert = require('assert');
const calculateNumber = require("./1-calcul.js");


describe('SUM', () => {
  it('rounds a and b and give the correct sum', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUM', 2.4, 0.8), 3);
    assert.equal(calculateNumber('SUM', 4.4, 4.56), 9);
  });
  it('rounds a and give the correct sum', () => {
    assert.equal(calculateNumber('SUM', 1.4, 5), 6);
    assert.equal(calculateNumber('SUM', 2.5, 7), 10);
    assert.equal(calculateNumber('SUM', 3.7, 3), 7);
  });
  it('rounds b and give the correct sum', () => {
    assert.equal(calculateNumber('SUM', 1, 5.8), 7);
    assert.equal(calculateNumber('SUM', 2, 7.4), 9);
    assert.equal(calculateNumber('SUM', 3, 4.6), 8);
  });
})

describe('SUBTRACT', () => {
  it('rounds a and gives the correct substraction', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.57, 2), 0);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 5), -4);
    assert.equal(calculateNumber('SUBTRACT', 4.5, 2), 3);
  });

  it('rounds b and gives the correct substraction', () => {
    assert.equal(calculateNumber('SUBTRACT', -6, 1.6), -8);
    assert.equal(calculateNumber('SUBTRACT', 2.0, 1.8), 0);
    assert.equal(calculateNumber('SUBTRACT', 3, 3.5), -1);
  });

  it('rounds a and b and gives the correct substraction', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.9, -2.3), 4);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 1.7), -1);
    assert.equal(calculateNumber('SUBTRACT', 3.8, 2.8), 1);
  });
})

describe('DIVIDE', () => {
  it('rounds a and gives the correct division', () => {
    assert.equal(calculateNumber('DIVIDE', 1.7, 2), 1);
    assert.equal(calculateNumber('DIVIDE', 1.2, -2), -0.5);
    assert.equal(calculateNumber('DIVIDE', 5.5, 2.0), 3);
  });

  it('rounds b and gives the correct division', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 1.8), 2);
    assert.equal(calculateNumber('DIVIDE', -1, 1.5), -0.5);
    assert.equal(calculateNumber('DIVIDE', 2, -0.1), 'Error');
  });

  it('rounds a and b and gives the correct division', () => {
    assert.equal(calculateNumber('DIVIDE', -1.7, -2.4), 1);
    assert.equal(calculateNumber('DIVIDE', 1.2, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 2.6, 3.5), 0.75);
  });
})
