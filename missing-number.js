/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = (nums.length * nums.length + 1) / 2;
  let arrSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    arrSum += nums[i];
  }
  console.log(sum, arrSum);
  return sum - arrSum;
};

console.log(missingNumber([3, 0, 1]));
