/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = function (nums, key) {
  const freqDict = {}
  let maxFreq = 0
  let maxTarget

  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] === key) {
      const target = nums[i + 1]
      freqDict[target] = freqDict[target] ? freqDict[target] + 1 : 1
      if (freqDict[target] > maxFreq) {
        maxFreq = freqDict[target]
        maxTarget = target
      }
    }
  }

  return maxTarget
}
console.log(mostFrequent([2, 2, 2, 2, 3], 2))
