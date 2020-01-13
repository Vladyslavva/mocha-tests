function sum (a, b){
  return a + b;
}
function mult (a, b){
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
module.exports = {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};
