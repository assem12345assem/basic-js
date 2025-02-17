const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const verifyActivity = Number.parseFloat(sampleActivity);
  if(typeof sampleActivity !== "string" || isNaN(verifyActivity)
    || verifyActivity <= 0 || verifyActivity >= MODERN_ACTIVITY) {
    return false;
  }
  const decay = Math.LN2 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / verifyActivity) / decay;
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
