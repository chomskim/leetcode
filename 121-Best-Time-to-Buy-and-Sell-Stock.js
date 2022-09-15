/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxVal = 0
  let minBuy = 10 ** 5 + 1
  let maxSell = -1

  let minPosList = []
  let maxPosList = []
  for (let pos = 0; pos < prices.length; pos++) {
    if (minBuy > prices[pos]) {
      minBuy = prices[pos]
      minPosList.unshift(pos)
    }
  }
  for (let pos = prices.length - 1; pos >= 0; pos--) {
    if (maxSell < prices[pos]) {
      maxSell = prices[pos]
      maxPosList.unshift(pos)
    }
  }

  for (let i = 0; i < minPosList.length; ++i) {
    let buyPrice = prices[minPosList[i]]
    for (let j = 0; j < maxPosList.length; ++j) {
      if (minPosList[i] > maxPosList[j]) continue
      let selPrice = prices[maxPosList[j]]
      let profit = selPrice - buyPrice
      if (profit > maxVal) maxVal = profit
    }
  }
  return maxVal
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
