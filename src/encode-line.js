
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let ans = '';
  let start = 1;
  let count = 1;
  let char = str.charAt(0);
  while(start < str.length) {
    if(str.charAt(start) === char) {
      count++;
    } else {
      if(count > 1) ans += count;
      ans += char;
      count = 1;
      char = str.charAt(start);
    }
    start++;
  }
  if(count > 1) ans += count;
  ans += str.charAt(start-1);
  return ans;
}

module.exports = {
  encodeLine
};
