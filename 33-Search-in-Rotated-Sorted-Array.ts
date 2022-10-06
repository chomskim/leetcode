/**
 * @desc 33. Search in Rotated Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} the index of target if it is in nums, or -1 if it is not in nums.
 */

function search(nums: number[], target: number): number {
  function binSearchRotArray(ser: number[], val: number, low: number, high: number): number {
    let mid = 0
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      console.log(low, mid, high)
      console.log(ser[low], ser[mid], ser[high])
      if (ser[mid] === val) {
        return mid
      } else if (ser[mid] <= ser[high] && (val < ser[mid] || val > ser[high])) {
        // left
        high = mid - 1
      } else if (ser[low] <= val && val < ser[mid]) {
        // left
        high = mid - 1
      } else if (ser[low] <= ser[mid] && (val < ser[low] || val > ser[mid])) {
        // right
        low = mid + 1
      } else if (ser[mid] < val && val <= ser[high]) {
        // right
        low = mid + 1
      }
    }
    return -1
  }
  return binSearchRotArray(nums, target, 0, nums.length - 1)
}
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8))
