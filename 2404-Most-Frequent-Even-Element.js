const mostFrequentEven = function (nums) {
  const freqMap = {}
  for (let i = 0; i < nums.length; ++i) {
    const fkey = nums[i]
    if (freqMap[fkey]) freqMap[fkey] += 1
    else freqMap[fkey] = 1
  }
  console.log(freqMap)
  const kvList = Object.entries(freqMap)
  const key = kvList.map((x) => x[0])
  const val = kvList.map((x) => x[1])
  console.log(key)
  console.log(val)
  const maxVal = kvList.reduce((a, c) => (c[0] % 2 === 0 ? Math.max(a, c[1]) : a), 0)
  console.log(maxVal)
  let minKeyVal = 10 ** 5 + 1
  let found = false
  for (let i = 0; i < key.length; ++i) {
    if (val[i] === maxVal) {
      console.log(key[i])
      if (Number(key[i]) < minKeyVal && key[i] % 2 === 0) {
        minKeyVal = Number(key[i])
        found = true
      }
    }
  }
  if (found) return minKeyVal
  return -1
}
console.log(
  mostFrequentEven([
    4287, 799, 8103, 3526, 8396, 7060, 8287, 4214, 4093, 6763, 651, 4907, 8350, 4866, 5114, 5245, 3198, 6644, 3620,
    1586, 3068, 2769, 9506, 2319, 588, 5055, 730, 6968, 4814, 144, 5180, 8798, 8783, 3319, 7765, 3254, 7164, 5462, 8085,
    5481, 8363, 3135, 2910, 583, 3751, 3044, 8734, 4075, 5489, 7866, 3404, 9532, 3751, 571, 7460, 4934, 9346, 4076,
    1505, 9576, 9406, 3342, 8090, 5979, 3140, 4453, 4779, 9324, 2945, 7279, 6809, 9619, 6958, 9881, 8308, 9246, 2529,
    3727, 1241, 7230, 4536, 9852, 1667, 1688, 1320, 6400, 6359, 6140, 904, 6287, 6499, 9256, 7666, 4083, 2927, 3165,
    9239, 9433, 1620, 6961, 3115, 8766, 2416, 6653, 9030, 2690, 9165, 6150, 1644, 5925,
  ])
)
