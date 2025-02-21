
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let depths = [];
    for (let a of arr) {
      if(Array.isArray(a)) {
        depths.push(1 + this.calculateDepth(a));
      }
    }
    if(depths.length === 0) {
      return 1;
    } else {
      return Math.max(...depths);
    }
  }
}

module.exports = {
  DepthCalculator
};
