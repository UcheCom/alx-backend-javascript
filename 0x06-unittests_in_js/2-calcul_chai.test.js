const {expect} = require('chai');
const calculateNumber = require("./2-calcul_chai.js");


describe('SUM', () => {
  it('rounds a and b and give the correct sum', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 2.4, 0.8)).to.equal(3);
    expect(calculateNumber('SUM', 4.4, 4.56)).to.equal(9);
  });
  it('rounds a and give the correct sum', () => {
    expect(calculateNumber('SUM', 1.67, 3)).to.equal(5);
    expect(calculateNumber('SUM', 2.5, 7)).to.equal(10);
    expect(calculateNumber('SUM', 3.7, 3)).to.equal(7);
  });
  it('rounds b and give the correct sum', () => {
    expect(calculateNumber('SUM', 1, 5.8)).to.equal(7);
    expect(calculateNumber('SUM', 2, 7.4)).to.equal(9);
    expect(calculateNumber('SUM', 3, 4.6)).to.equal(8);
  });
})

describe('SUBTRACT', () => {
  it('rounds a and gives the correct substraction', () => {
    expect(calculateNumber('SUBTRACT', 1.57, 2)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.4, 5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
  });

  it('rounds b and gives the correct substraction', () => {
    expect(calculateNumber('SUBTRACT', -6, 1.6)).to.equal(-8);
    expect(calculateNumber('SUBTRACT', 2.0, 1.8)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 3, 3.5)).to.equal(-1);
  });

  it('rounds a and b and gives the correct substraction', () => {
    expect(calculateNumber('SUBTRACT', 1.9, -2.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 1.4, 1.7)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 3.8, 2.8)).to.equal(1);
  });
})

describe('DIVIDE', () => {
  it('rounds a and gives the correct division', () => {
    expect(calculateNumber('DIVIDE', 1.7, 2)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1.2, -2)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', 5.5, 2.0)).to.equal(3);
  });

  it('rounds b and gives the correct division', () => {
    expect(calculateNumber('DIVIDE', 4, 1.8)).to.equal(2);
    expect(calculateNumber('DIVIDE', -1, 1.5)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', 2, -0.1)).to.equal('Error');
  });

  it('rounds a and b and gives the correct division', () => {
    expect(calculateNumber('DIVIDE', -1.7, -2.4)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 2.6, 3.5)).to.equal(0.75);
  });
})
