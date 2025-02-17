
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  const n = matrix.length;
  const m = matrix[0].length;
  const arr = new Array(n).fill().map(_ => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] = countMines(matrix, i, j);
    }
  }
  return arr;
}
function countMines(matrix, i, j) {
  let count = 0;
  for (let row = i - 1; row <= i + 1; row++) {
    if (row < 0 || row >= matrix.length) continue;

    for (let col = j - 1; col <= j + 1; col++) {
      if (col < 0 || col >= matrix[row].length || (row === i && col === j)) continue;
      count += Number(matrix[row][col]);
    }
  }

  return count;
}

module.exports = {
  minesweeper
};
