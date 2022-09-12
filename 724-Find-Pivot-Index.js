/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let fsum = 0
  let bsum = 0
  for (let i = 1; i < nums.length; ++i) bsum += Number(nums[i])

  for (let piv = 0; piv < nums.length; ++piv) {
    console.log(piv, fsum, bsum)
    if (fsum === bsum) return piv
    else {
      fsum += nums[piv]
      bsum -= nums[piv + 1]
    }
  }
  return -1
}
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]))
