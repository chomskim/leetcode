/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
  let res = 0
  for (let i = 1; i <= n; ++i) {
    let len = i.toString(2).length
    res = res * 2 ** len + i
    res %= 10 ** 9 + 7
  }
  console.log(res)
  // res %= 10 ** 9 + 7
  // console.log(res)
  return res
}
console.log(concatenatedBinary(12))
