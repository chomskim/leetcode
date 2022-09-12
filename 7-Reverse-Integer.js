/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const sign = x < 0 ? -1 : 1
  let res = x * sign
  let revStr = res.toString().split('').reverse().join('')
  res = Number(revStr) * sign
  if (res >= -(2 ** 31) && res <= 2 ** 31 - 1) return Number(revStr) * sign
  return 0
}
