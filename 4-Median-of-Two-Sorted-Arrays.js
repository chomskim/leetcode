/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let mid = (nums1.length + nums2.length) / 2
  const even = Number.isInteger(mid)
  const merged = []
  let p1 = 0
  let p2 = 0
  while (p1 < nums1.length || p2 < nums2.length) {
    let val1 = p1 < nums1.length ? nums1[p1] : 10 ** 6 + 1
    let val2 = p2 < nums2.length ? nums2[p2] : 10 ** 6 + 1
    if (val1 < val2) {
      merged.push(val1)
      p1 += 1
    } else {
      merged.push(val2)
      p2 += 1
    }
    console.log(merged)
    if (merged.length > mid) {
      return even ? (merged[merged.length - 2] + merged[merged.length - 1]) / 2 : merged[merged.length - 1]
    }
  }

  return 1
}
console.log(findMedianSortedArrays([1, 3], [2, 4]))
