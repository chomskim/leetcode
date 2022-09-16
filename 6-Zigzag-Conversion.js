/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s
  let res = ''
  for (let row = 0; row < numRows; ++row) {
    if (numRows === 1) return s
    let i = 0
    while (true) {
      console.log(res)
      let base = i * (2 * numRows - 2)
      let base1 = (i + 1) * (2 * numRows - 2)
      if (row === 0 || row === numRows - 1) {
        let pos = base + row
        if (pos < s.length) res += s.charAt(pos)
        else break
      } else {
        let pos = base + row
        if (pos < s.length) res += s.charAt(pos)
        else break
        pos = base1 - row
        if (pos < s.length) res += s.charAt(pos)
        else break
      }
      i += 1
    }
  }
  return res
}
console.log(convert('A', 1))
