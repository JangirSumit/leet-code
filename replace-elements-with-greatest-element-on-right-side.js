/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max = Math.max(...arr.slice(1));

  for (let i = 0; i < arr.length - 1; i++) {
    if (max == arr[i]) {
      max = Math.max(...arr.slice(i + 1));
    }

    arr[i] = max;
  }
  arr[arr.length - 1] = -1;

  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
