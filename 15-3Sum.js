/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  function binSearch(ser, val, start, end) {
    if (start > end) return -1
    const mid = Math.floor((start + end) / 2)
    if (ser[mid] < val) return binSearch(ser, val, mid + 1, end)
    if (ser[mid] > val) return binSearch(ser, val, start, mid - 1)
    return mid
  }
  res = new Set()
  sor = nums.sort((a, b) => a - b)
  fp = 0
  while (sor[fp] <= 0) {
    bp = sor.length - 1
    while (sor[bp] >= 0) {
      sum = sor[fp] + sor[bp]
      ind = binSearch(sor, -sum, fp + 1, bp - 1)
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
console.log(threeSum([3, 0, -2, -1, 1, 2]))
