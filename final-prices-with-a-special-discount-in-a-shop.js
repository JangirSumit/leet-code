/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  for (let i = 0; i < prices.length - 1; i++) {
    prices[i] -= getDiscount(prices[i], prices.slice(i + 1));
  }
  return prices;
};

function getDiscount(price, prices) {
  let discount = 0;

  for (let i = 0; i < prices.length; i++) {
    if (price < prices[i]) {
      continue;
    } else {
      discount = prices[i];
      break;
    }
  }
  return discount;
}

const prices = [8, 4, 6, 2, 3];
console.log(finalPrices(prices));

const prices1 = [1, 2, 3, 4, 5];
console.log(finalPrices(prices1));
