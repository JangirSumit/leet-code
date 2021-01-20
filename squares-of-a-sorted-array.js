/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let neg = [];
  let pos = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      neg.push(nums[i]);
    } else {
      pos.push(nums[i]);
    }
  }
  neg = neg.reverse();

  let i = 0;
  let j = 0;
  while (i < pos.length && j < neg.length) {
    if (pos[i] ** 2 > neg[j] ** 2) {
      result.push(neg[j] ** 2);
      j++;
    } else {
      result.push(pos[i] ** 2);
      i++;
    }
  }

  while (i < pos.length) {
    result.push(pos[i] ** 2);
    i++;
  }

  while (j < neg.length) {
    result.push(neg[j] ** 2);
    j++;
  }

  return result;
};

const nums = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums));
