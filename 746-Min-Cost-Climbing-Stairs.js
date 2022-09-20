/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const minCost = {}
  minCost[0] = 0
  minCost[1] = 0
  for (let i = 2; i < cost.length; ++i) {
    minCost[i] = Math.min(minCost[i - 2] + cost[i - 2], minCost[i - 1] + cost[i - 1])
    console.log(minCost)
  }
  return Math.min(minCost[cost.length - 1] + cost[cost.length - 1], minCost[cost.length - 2] + cost[cost.length - 2])
}
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
