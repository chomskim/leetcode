/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  const sortedNums = [...nums].sort((a, b) => b - a)
  return (sortedNums[0] - 1) * (sortedNums[1] - 1)
}
