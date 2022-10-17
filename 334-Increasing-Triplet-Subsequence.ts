/**
 * @desc 334. Increasing Triplet Subsequence
 * @param nums {number[]}
 * @returns {boolean}
 */
// Not finished
function increasingTriplet(nums: number[]): boolean {
  let mk = 0
  let maxk = nums[mk]
  let maxj = Infinity
  let minj = -Infinity
  let mi = 0
  let mini = nums[mi]

  let k = 1
  while (true) {
    while (k < nums.length) {
      if (nums[k] > maxk) {
        if (maxk > maxj) return true
        else {
          if (maxj === Infinity) {
            maxj = maxk
          }
          maxk = nums[k]
          mk = k
        }
      }
      k += 1
    }
    if (mk >= nums.length - 2) break
    mk += 1
    maxk = nums[mk]
    k = mk + 1
    maxj = maxj < maxk ? maxj : Infinity
  }
  return false
}
console.log(
  increasingTriplet([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100000000,
  ])
)
