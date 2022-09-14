/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const freqMap = {}
  const slist = s.split('')
  slist.forEach((ch) => {
    if (freqMap[ch]) freqMap[ch] += 1
    else freqMap[ch] = 1
  })
  let oddExist = false
  let res = 0
  Object.keys(freqMap).forEach((ch) => {
    const freq = freqMap[ch]
    const di = Math.floor(freq / 2)
    res = res + di * 2
    const re = freq % 2
    if (re === 1) oddExist = true
  })
  if (oddExist) res += 1
  return res
}
