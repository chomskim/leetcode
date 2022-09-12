/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return []
  const res = new Array(m)
  let pos = 0
  for (let row = 0; row < m; ++row) {
    res[row] = new Array(n)
    for (let col = 0; col < n; ++col) {
      res[row][col] = original[pos]
      pos += 1
    }
  }
  return res
}
