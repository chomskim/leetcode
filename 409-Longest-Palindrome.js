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
}
