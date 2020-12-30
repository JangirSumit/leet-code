/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    result.splice(result.length, 0, ...new Array(nums[i]).fill(nums[i + 1]));
  }
  return result;
};

const nums = [65, 44, 72, 15];
console.log(decompressRLElist(nums));
