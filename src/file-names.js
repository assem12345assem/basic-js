const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  const obj = {};
  const ans = new Array(names.length);

  for (let i = 0; i < names.length; i++) {
    const fileName = names[i];

    if (obj[fileName]) obj[fileName]++;
    else obj[fileName] = 1;

    const count = obj[fileName] - 1;
    const str = count === 0 ? '' : `(${count})`;
    const currResult = `${fileName}${str}`;
    ans[i] = currResult;
    obj[currResult] = 1;
  }

  return ans;
}

module.exports = {
  renameFiles
};
