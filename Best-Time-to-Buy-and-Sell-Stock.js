1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6  let Buy = prices[0];
7  let Profit = 0;
8
9  for (let i = 1; i < prices.length; i++) {
10    if (prices[i] < Buy) {
11      Buy = prices[i];
12    } else {
13      Profit = Math.max(Profit, prices[i] - Buy);
14    }
15  }
16
17  return Profit;
18};
19