/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let result;
  for (let i = 0; i < n; i++) {
    result = result ^ (start + 2 * i);
  }
  return result;
};

const n = 5,
  start = 0;
console.log(xorOperation(n, start));
