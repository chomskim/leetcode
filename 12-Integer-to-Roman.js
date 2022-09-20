/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const romanMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }

  function convDigit(d, p10) {
    switch (d) {
      case 0:
        return ''
      case 1:
      case 2:
      case 3:
        return romanMap[p10].repeat(d)
      case 4:
        return romanMap[p10] + romanMap[5 * p10]
      case 5:
        return romanMap[5 * p10]
      case 6:
      case 7:
      case 8:
        return romanMap[5 * p10] + romanMap[p10].repeat(d - 5)
      case 9:
        return romanMap[p10] + romanMap[10 * p10]
    }
  }

  // const digits = num
  //   .toString()
  //   .split('')
  //   .reverse()
  //   .map((d) => Number(d))
  const digits = Array.from(String(num), Number).reverse()
  let res = ''
  let p10 = 1
  for (let i = 0; i < digits.length; ++i) {
    console.log(res)
    res = convDigit(digits[i], p10) + res
    p10 *= 10
  }
  return res
}
console.log(intToRoman(2492))
