/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  if (mat.length == 1) {
    return mat[0][0];
  }
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (mat.length - 1 - i != i) {
      sum += mat[i][mat.length - 1 - i];
    }
  }
  return sum;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(mat));
