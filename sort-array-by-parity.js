/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let result = [];
  A.forEach((a) => {
    if (a % 2 == 0) {
      result.unshift(a);
    } else {
      result.push(a);
    }
  });
  return result;
};

const input = [3, 1, 2, 4];
console.log(sortArrayByParity(input));
