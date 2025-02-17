
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  const map = new Map();
  for(const x of domains) {
    const arr = x.split('.');
    let str = '.';
    for (let i = arr.length-1; i >= 0; i--) {
      str += (arr[i]);
      let n = 1;
      if(map.has(str)) {
        n = map.get(str) + 1;
      }
      map.set(str, n);
      str += ('.');
    }
  }
  let obj = {};
  for(let [key, value] of map.entries()) {
    obj[key] = value;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
