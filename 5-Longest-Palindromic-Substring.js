/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  function genMaxPal(s, sp, ep) {
    let maxtemp = s.substring(sp, ep + 1)
    while (true) {
      if (sp <= 0) break
      sp = sp - 1
      if (ep >= s.length - 1) break
      ep = ep + 1
      if (s.charAt(sp) === s.charAt(ep)) maxtemp = s.substring(sp, ep + 1)
      else break
    }
    return maxtemp
  }
  let cp = 0
  let maxpal = ''
  while (cp < s.length) {
    // odd palindrome
    // find max palindrome for cp(center position)
    let maxodd = genMaxPal(s, cp, cp)
    if (maxodd.length > maxpal.length) maxpal = maxodd
    // even palindorme
    if (cp + 1 < s.length && s.charAt(cp) === s.charAt(cp + 1)) {
      let maxeven = genMaxPal(s, cp, cp + 1)
      if (maxeven.length > maxpal.length) maxpal = maxeven
    }
    cp += 1
  }
  return maxpal
}
console.log(longestPalindrome('babad'))
