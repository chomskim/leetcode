/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  let mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    }
  }
  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
