/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let missings = [];
  let set = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missings.push(i);
    }
  }
  return missings;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbers(nums));
