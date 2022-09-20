/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let maxlen = 1
  let fp = 0

  while (fp < s.length - 1) {
    let templen = 1
    for (let i = fp; i < s.length - 1; ++i) {
      if (s.charAt(i).charCodeAt(0) + 1 === s.charAt(i + 1).charCodeAt(0)) {
        templen += 1
      } else break
    }
    if (templen > maxlen) maxlen = templen
    fp += 1
  }
  return maxlen
}
