
/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const n = options.repeatTimes || 1;
  const separator = options.separator || '+';

  const m = options.additionRepeatTimes || 1;
  const addStr = options.hasOwnProperty("addition") ? (String(options.addition) || '') : '';
  const addSeparator = options.additionSeparator || '|';

  let sep = [];
  for (let i = 0; i < m; i++) {
    sep.push(`${addStr}`);
  }
  let j = sep.join(addSeparator);

  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(`${str}${j}`);
  }
  return ans.join(separator);

}

module.exports = {
  repeater
};