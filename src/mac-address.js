const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  if(arr.length !== 6) return false;
  for(const i of arr) {
    const first = i.charAt(0);
    const second = i.charAt(1);
    if(!isInteger(first)) {
      if(!isValidChar(first)) return false;
    }
    if(!isInteger(second)) {
      if(!isValidChar(second)) return false;
    }
  }
  return true;
}
function isInteger(n) {
  return Number.isInteger(Number.parseInt(n));
}
function isValidChar(char) {
  const charA = 'A'.charCodeAt();
  const charF = 'F'.charCodeAt();
  return char.charCodeAt() >= charA && char.charCodeAt() <= charF;
}

module.exports = {
  isMAC48Address
};
