/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  let res = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      res *= x;
      --n;
    }
    x *= x;
    n /= 2;
  }
  return res;
};

function myPow1(x, n) {
  function inner(x, n) {
    if (n == 0 || x == 1) {
      return 1;
    } else if (n % 2 == 0) {
      let temp = inner(x, n / 2);
      return temp * temp;
    } else {
      let temp = inner(x, Math.floor(n / 2));
      return x * temp * temp;
    }
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return inner(x, n);
}

console.log(myPow(2, 3));
