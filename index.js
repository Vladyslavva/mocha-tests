function sum (a, b){
  return a + b;
}
function mult (a, b){
  if(a === null || b === null) return null;
  else if(a === undefined || b === undefined) return NaN;
  return a * b;
}

function isAdult (age){
  return age < 0 ? undefined : age >= 21;
}

function sortArrayUp (arr){
  return arr.sort((a, b) => (a - b));
}

function isPalindrome (str){
  if(str === null || str === undefined) return false;
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length - i - 1]) return false;
  } return true;
}

function isOddNumber (num){
  return num % 2 !== 0;
}

function isEvenNumber(num){
  return num % 2 === 0;
}

//function that reverses the words in a given string
function reverse(str){
  if (str === '') return '';
  return str.split(' ').reverse().join(' ');
}

//Find the mean (average) of a list of numbers in an array.
const findAverage = function (nums) {
  return  nums.reduce((accum, cur) => accum + cur, 0) / nums.length !== 0 ? nums.length : 1;
}

// check whether the provided array contains the value
function check(a,x){
  if(a.includes(x)) return true;
  else return false;
}

module.exports = {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber, reverse, findAverage, check};
