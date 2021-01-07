/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxI = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxI]) {
      maxI = i;
    }
  }
  let secondMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondMax && maxI != i) {
      secondMax = nums[i];
    }
  }
  console.log(maxI, secondMax);
  return (nums[maxI] - 1) * (secondMax - 1);
};

console.log(maxProduct([10, 2, 5, 2]));
