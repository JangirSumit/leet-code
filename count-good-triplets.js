/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        console.log(arr[i], arr[j], arr[k]);
        if (isGoodTriplet(arr[i], arr[j], arr[k], a, b, c)) {
          count++;
        }
      }
    }
  }
  return count;
};

function isGoodTriplet(x, y, z, a, b, c) {
  return Math.abs(x - y) <= a && Math.abs(y - z) <= b && Math.abs(z - x) <= c;
}

const arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3;

console.log(countGoodTriplets(arr, a, b, c));
