/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  function isoReplace(s) {
    charMap = {}
    const slist = s.split('')
    let id = 1
    slist.forEach((ch, i) => {
      if (!charMap[ch]) {
        charMap[ch] = id
        id += 1
      }
      slist[i] = charMap[ch]
    })
    return slist
  }

  const slist = isoReplace(s)
  const tlist = isoReplace(t)
  console.log(slist)
  console.log(tlist)
  return slist.every((val, index) => val === tlist[index])
}
console.log(isIsomorphic('foo', 'bar'))
