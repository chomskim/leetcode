/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  function fact(n) {
    let res = 1
    for (i = 1; i <= n; ++i) {
      res *= i
    }
    return res
  }
  console.log(fact(3))
  return fact(m + n - 2) / fact(m - 1) / fact(n - 1)
}
console.log(uniquePaths(3, 2))
