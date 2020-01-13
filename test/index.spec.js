const {expect} = require('chai');

const {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber, reverse, findAverage, check } = require('../index.js');

describe('function sum', () => {
  it('should function sum equals 10', () => {
    expect(sum(2,4)).to.equal(6);
    //expect(sum(2,4)).eq(6);
  });

  it('should function sum not equals 0', () => {
    expect(sum(2, 4)).to.not.equal( 0);
  });
});

describe('function mult', () => {
  it('should return the correct result of multiplication', () => {
    expect(mult(2, 4)).to.equal(8);
  });
  it('should return null if one of arguments is null', () => {
    expect(mult(null, 10)).to.be.null;
  });
  it('should return NaN if one of arguments is undefined', () => {
    expect(mult(undefined, 100)).to.be.NaN;
  });
});

describe('function isPalindrome', () => {
  it('should return true if argument is a Palindrome', () => {
    expect(isPalindrome('madam')).to.be.true;
  });
  it('should return false if argument is not a Palindrome', () => {
    expect(isPalindrome('apple')).to.be.false;
  });
  it('should return false if argument is null or undefined', () => {
    expect(isPalindrome('apple')).to.be.false;
  });
});

describe('function isAdult', () => {
  it('should return true if argument equals 21', () => {
    expect(isAdult(21)).to.be.true;
  });
  it('should return true if argument is more than 21', () => {
    expect(isAdult(40)).to.be.true;
  });
  it('should return false if argument is less than 21, but more than 0', () => {
    expect(isAdult(5)).to.be.false;
  });
  it('should return false if argument equals 0', () => {
    expect(isAdult(0)).to.be.false;
  });
  it('should return undefined if argument is less than 0', () => {
    expect(isAdult(-10)).to.be.undefined;
  });
});

describe('function sortArrayUp', () => {
  it('should return up sorted array', () => {
    expect(sortArrayUp([10, 9, 8, 5, 4, 3])).to.deep.equal([3, 4, 5, 8, 9, 10]);
  });
  it('should return an empty array if the input is empty array', () => {
    expect(sortArrayUp([])).to.deep.equal([]);
  });
});

describe('function isOddNumber', () => {
  it('should return true, if number is odd', () => {
    expect(isOddNumber(5)).to.be.true;
  });
  it('should return false, if number is even', () => {
    expect(isOddNumber(6)).to.be.false;
  });
});

describe('function isEvenNumber', () => {
  it('should return true, if number is even', () => {
    expect(isEvenNumber(6)).to.be.true;
  });
  it('should return false, if number is odd', () => {
    expect(isEvenNumber(3)).to.be.false;
  });
});

describe('function reverse', () => {
  it('should reverse given words in a string', () => {
    expect(reverse('This is so easy')).to.equal('easy so is This');
  });
  it('should return empty string if the argument is empty string', () => {
    expect(reverse ('')).to.eq('');
  });
  it('should return one word if the argument is one word', () => {
    expect(reverse ('word')).to.eq('word');
  });
});

describe('function findAverage', () => {
  it('should calculate average sum of numbers in the array', () => {
    expect(findAverage([1, 3, 5, 7])).to.eq(4);
  });
  it('should return the same number in the array contains one number', () => {
    expect(findAverage([1])).to.eq(1);
  });
  it('should return zero if the array is empty', () => {
    expect(findAverage([])).to.eq(0);
  });
});

describe('function check', () => {
  it('should check if array contains value, if it is number', () => {
    expect(check([3, 5, 78, 90], 78)).to.be.true;
  });
  it('should check if array contains value, if it is a string', () => {
    expect(check(['e', '5', 'home'], 'e')).to.be.true;
  });
  it('should check if array does not contain value, if it is not in the array', () => {
    expect(check(['e', '5', 'home'], 'b')).to.be.false;
  });
});

