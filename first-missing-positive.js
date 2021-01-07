/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  if (nums.length === 0 || nums[nums.length - 1] <= 0) return 1;
  for (let i = 1; i < nums[nums.length - 1]; i++) {
    if (nums.indexOf(i) === -1) return i;
  }
  return nums[nums.length - 1] + 1;
};

let firstMissingPositive1 = (A) => {
  let seen = new Set([...A]);
  for (let i = 1; ; ++i) {
    if (!seen.has(i)) return i;
  }
  return 0;
};

console.log(firstMissingPositive1([3, 4, -1, 1]));
