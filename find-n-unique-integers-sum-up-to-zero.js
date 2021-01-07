/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let arr = [];
  let m = parseInt(n / 2);

  for (let index = 1; index < m; index++) {
    arr.push(index);
    arr.push(-1 * index);
  }
  if (m * 2 != n) arr.push(0);

  return arr;
};
