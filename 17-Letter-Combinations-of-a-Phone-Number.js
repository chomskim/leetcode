/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits === '') return []
  const letterMap = {
    2: 'abc'.split(''),
    3: 'def'.split(''),
    4: 'ghi'.split(''),
    5: 'jkl'.split(''),
    6: 'mno'.split(''),
    7: 'pqrs'.split(''),
    8: 'tuv'.split(''),
    9: 'wxyz'.split(''),
  }
  let res = ['']
  for (let i = 0; i < digits.length; ++i) {
    const temp = []
    let num = digits[i]
    for (let j = 0; j < letterMap[num].length; ++j) {
      console.log()
      temp.push(...res.map((s) => s + letterMap[num][j]))
    }
    console.log(temp)
    res = temp
  }
  return res
}
console.log(letterCombinations('23'))
