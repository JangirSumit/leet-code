/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let limit = 3;
  let sum = add(arr);

  if (arr.length > 1 && arr.length % 2 == 1) {
    sum = sum * 2;
  }

  //   console.log(sum);

  while (limit < arr.length) {
    // console.log(limit);

    for (let i = 0; i < arr.length; i++) {
      let newArr = arr.slice(i, i + limit);

      if (newArr.length < limit) {
        break;
      }
      sum += add(newArr);
    }

    limit = limit + 2;
  }

  return sum;
};

function add(arr) {
  return arr.reduce((a, b) => a + b);
}

let arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));

arr = [1];
console.log(sumOddLengthSubarrays(arr));

arr = [10, 11, 12];
console.log(sumOddLengthSubarrays(arr));
