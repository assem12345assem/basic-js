const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  const obj1 = new Map();
  for(let x of s1) {
    if(obj1.has(x)) {
      let n = obj1.get(x);
      obj1.set(x, n+1);
    } else {
      obj1.set(x, 1);
    }
  }
  console.log(obj1)
  let count = 0;
  for(let x of s2) {
    if(obj1.has(x)) {
      let n = obj1.get(x);
      if(n - 1 <= 0) {
        count++;
        obj1.delete(x);
      } else {
        count++;
        obj1.set(x, n-1);
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
