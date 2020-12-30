// Complexity O(n2)
var twoSumBruteForce = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result = [i, j];
        break;
      }
    }
  }
  return result;
};

// Complexity O(n)
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    const remaining = target - nums[i];
    if (remaining in map && map[remaining] != i) {
      return [i, map[remaining]];
    }
  }

  return [];
};

var arr = [2, 7, 11, 15];
var t = 9;

console.log(twoSumBruteForce(arr, t));
console.log(twoSum(arr, t));
