/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  const slist = s.split('')
  const tlist = t.split('')

  let sp = 0
  let tp = 0
  while (sp < slist.length) {
    if (tp === tlist.length) return false
    if (slist[sp] === tlist[tp]) {
      sp += 1
    }
    tp += 1
  }
  return true
}
