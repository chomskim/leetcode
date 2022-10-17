/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  function binSearchR(ser, val, start, end) {
    if (start > end) return -1
    const mid = Math.floor((start + end) / 2)
    if (ser[mid] < val) return binSearchR(ser, val, mid + 1, end)
    if (ser[mid] > val) return binSearchR(ser, val, start, mid - 1)
    return mid
  }
  function binSearch(ser, val, start, end) {
    let low = start
    let high = end
    let mid
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      if (ser[mid] === val) {
        return mid
      } else if (ser[mid] < val) {
        low = mid + 1
      } else if (ser[mid] > val) {
        high = mid - 1
      }
    }
    return -1
  }
  let res = new Set()
  let sor = nums.sort((a, b) => a - b)
  let fp = 0
  while (sor[fp] <= 0) {
    let bp = sor.length - 1
    while (sor[bp] >= 0) {
      let sum = sor[fp] + sor[bp]
      let ind = binSearch(sor, -sum, fp + 1, bp - 1)
      if (ind !== -1) {
        res.add([sor[fp], -sum, sor[bp]].join(','))
      }
      bp -= 1
      if (bp <= fp) break
    }
    fp += 1
  }
  res = [...res].map((s) => s.split(',').map((x) => Number(x)))
  return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
