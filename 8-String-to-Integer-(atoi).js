/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  let res = s.trim()
  const sign = res.charAt(0) === '-' ? -1 : 1
  if (res.charAt(0) === '-' || res.charAt(0) === '+') {
    res = res.slice(1)
  }
  let sum = 0
  let pos = 0
  while (res.charAt(pos) >= '0' && res.charAt(pos) <= '9') pos += 1
  res = Number(res.slice(0, pos)) * sign
  res = Math.max(-2147483648, res)
  res = Math.min(2147483647, res)
  return res
}
