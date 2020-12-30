/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = -Infinity;
  for (let i = 0; i < accounts.length; i++) {
    let sum = accounts[i].reduce((a, b) => a + b);
    if (max < sum) {
      max = sum;
    }
  }
  return max;
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
