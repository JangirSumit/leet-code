/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  let result = 0;
  for (const key in map) {
    if (map[key] > 1) {
      result += fact(map[key]) / (2 * fact(map[key] - 2));
    }
  }
  return result;
};

var fact = function (n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

const nums = [1, 2, 3, 1, 1, 3];

console.log(numIdenticalPairs(nums));
