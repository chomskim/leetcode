/**
 * @desc 219. Contains Duplicate II
 * @param nums {number[]}
 * @param k {number}
 * @returns {boolean}
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const freqMap: { [key: string]: number[] } = {}

  for (let i = 0; i < nums.length; ++i) {
    if (!freqMap[nums[i]]) {
      freqMap[nums[i]] = [i]
    } else {
      let inds = freqMap[nums[i]]
      for (let j = 0; j < inds.length; ++j) {
        if (Math.abs(i - inds[j]) <= k) return true
      }
      inds.push(i)
    }
    console.log(i, freqMap)
  }
  return false
}
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
