/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  return grid.reduce((a, c) => a + c.reduce((x, y) => (y < 0 ? ++x : x), 0), 0);
};

var countNegatives1 = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] > 0) {
        break;
      }
      count++;
    }
  }
  return count;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

console.log(countNegatives(grid));
console.log(countNegatives1(grid));
