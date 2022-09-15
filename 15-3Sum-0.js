/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  res = new Set()
  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        let sum = nums[i] + nums[j] + nums[k]
        if (sum === 0) {
          res.add([nums[i], nums[j], nums[k]].sort().join(','))
        }
      }
    }
  }
  res = [...res].map((s) => s.split(','))
  return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
