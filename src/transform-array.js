
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-prev':
        if(i-1 >= 0) ans.push(arr[i-1]);
        break;
      case '--double-next':
        if(i+1 < arr.length) ans.push(arr[i+1]);
        break;
      case '--discard-prev':
        ans.pop();
        break;
      case '--discard-next':
        i++;
        if(i+1 < arr.length && typeof arr[i + 1] === "string") i++;
        break;
      default:
        ans.push(arr[i]);
    }
  }


  return ans;
}

module.exports = {
  transform
};
