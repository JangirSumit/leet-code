/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.splice(2 * i, 0, nums[i], nums[n + i]);
    console.log(result);
    // result.push(nums[i]);
    // result.push(nums[n + i]);
  }
  return result;
};

const nums = [2, 5, 1, 3, 4, 7],
  n = 3;

console.log(shuffle(nums, n));
