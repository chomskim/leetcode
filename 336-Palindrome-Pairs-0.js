/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function (words) {
  function isPalindrome(s) {
    fp = 0
    bp = s.length - 1

    while (fp <= bp) {
      if (s.charAt(fp) != s.charAt(bp)) {
        return false
      }
      fp += 1
      bp -= 1
    }
    return true
  }
  let res = []
  for (let i = 0; i < words.length - 1; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      if (isPalindrome(words[i] + words[j])) res.push([i, j])
      if (isPalindrome(words[j] + words[i])) res.push([j, i])
    }
  }
  return res
}
console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']))
