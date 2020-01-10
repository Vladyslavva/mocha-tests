const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');

describe('function sum', () => {
    it('should function sum equals 10', () => {
        assert.equal(sum(2, 4), 6);
        expect(sum(2,4)).to.equal(6);
        //expect(sum(2,4)).eq(6);
    });

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);
    });
});

it('should function mult works correct', () => {
    assert.equal(mult(2, 4), 8);
});

describe('function isPalindrome', () => {
    it('should return true if argument is a Palindrome', () => {
        assert.equal(isPalindrome("madam"), true);
    });
    it('should return false if argument is not a Palindrome', () => {
        assert.equal(isPalindrome("apple"), false);
    });
    it('should return false if argument is null or undefined', () => {
        assert.equal(isPalindrome(null), false);
    })
});

describe('function isAdult', () => {
    it('should return true if argument equals 21', () => {
        //assert.equal(isAdult(21), true);
        expect(isAdult(21)).to.be.true;
    });
    it('should return true if argument is more than 21', () => {
        assert.equal(isAdult(22), true);
    });
    it('should return false if argument is less than 21, but more than 0', () => {
        assert.equal(isAdult(5), false);
    });
    it('should return false if argument equals 0', () => {
        assert.equal(isAdult(0), false);
    });
    it('should return undefined if argument is less than 0', () => {
        assert.equal(isAdult(-10), undefined);


    });
});
describe('function sortArrayUp', () => {
    it('should return up sorted array', () => {
        assert.deepEqual(sortArrayUp([10, 9, 8, 5, 4, 3]), [3, 4, 5, 8, 9, 10]);
    });
});

describe('function isOddNumber', () => {
    it('should return true, if number is odd', () => {
        assert.equal(isOddNumber(5), true);
    });
    it('should return false, if number is even', () => {
        assert.equal(isOddNumber(6), false);
    })
});

describe('function isEvenNumber', () => {
    it('should return true, if number is even', () => {
        assert.equal(isEvenNumber(6), true);
    });
    it('should return false, if number is odd', () => {
        assert.equal(isEvenNumber(3), false);
    })
});