/**
 * 6190. Find All Good Indices
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const goodIndices = function (nums, k) {
  function countNonInc(fp, k) {
    let i
    for (i = 1; i < k; ++i) {
      console.log(fp, nums[fp + i - 1], nums[fp + i])
      if (nums[fp + i - 1] < nums[fp + i]) {
        // console.log('i - 1=', i - 1)
        return i - 1
      }
    }
    return i
  }
  function isNonDec(fp, k) {
    for (let i = 1; i < k; ++i) {
      if (nums[fp + i - 1] > nums[fp + i]) return false
    }
    return true
  }

  let res = []
  let i = k
  while (i < nums.length - k) {
    let count = countNonInc(i - k, k)
    console.log('count=', count, 'i=', i)
    if (count === k) {
      if (isNonDec(i + 1, k)) {
        res.push(i)
      }
      i += 1
    } else if (count === 0) {
      i += 1
    } else {
      i += count
    }
  }
  console.log(res)
  return res
}
console.log(goodIndices([2, 1, 1, 1, 3, 4, 1], 2))
