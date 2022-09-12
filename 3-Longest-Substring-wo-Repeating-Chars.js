/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let curStr = ''
  let curPos = 0
  let maxStr = ''
  let strList = [...s]

  while (curPos < strList.length - maxStr.length) {
    for (let i = curPos; i < strList.length; ++i) {
      if (!curStr.includes(strList[i])) {
        curStr = curStr.concat(strList[i])
      } else {
        if (curStr.length > maxStr.length) {
          maxStr = curStr
        }
        curStr = ''
        curPos += 1
        break
      }
    }
    if (curStr.length > maxStr.length) maxStr = curStr
  }

  return maxStr.length
}
