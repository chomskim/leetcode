/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  let res = 0
  let sign = (dividend >= 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if (divisor === 1) return Math.min(2147483647, dividend * sign)
  while (true) {
    if (dividend >= divisor) {
      res += 1
      dividend -= divisor
    } else break
  }
  return res * sign
}
console.log(divide(-2147483648, 2))
