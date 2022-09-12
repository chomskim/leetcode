/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const symDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }
  const letter1 = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  const letter2 = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']

  let sum = 0
  let romanStr = s.slice()
  letter2.forEach((le) => {
    const exStrs = romanStr.split(le)
    sum += (exStrs.length - 1) * symDict[le]
    romanStr = exStrs.join('')
  })
  letter1.forEach((le) => {
    const exStrs = romanStr.split(le)
    sum += (exStrs.length - 1) * symDict[le]
  })
  return sum
}
