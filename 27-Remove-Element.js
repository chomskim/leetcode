/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  const clone = new Array(nums.length)
  let pos = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== val) {
      clone[pos] = nums[i]
      pos += 1
    }
  }
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = clone[i]
  }
  return pos
}
