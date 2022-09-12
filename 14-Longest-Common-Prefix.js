/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const maxlen = Math.min(...strs.map((s) => s.length))
  // console.log('maxlen=', maxlen)
  let curPrefix = ''
  for (let i = 0; i < maxlen; ++i) {
    let match = true
    for (let j = 1; j < strs.length; ++j) {
      if (strs[j].charAt(i) !== strs[0].charAt(i)) {
        match = false
        break
      }
    }
    if (match) {
      curPrefix += strs[0].charAt(i)
    } else break
  }
  return curPrefix
}
// console.log(Math.min(...['flower', 'flow', 'flight'].map((s) => s.length)))
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
