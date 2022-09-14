/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  function getAllValidParens(parens) {
    let res = []
    // console.log('parens=', parens)
    for (let i = 0; i <= parens.length; ++i) {
      let newpa = [...parens.split('')]
      // console.log('newpa=', newpa)
      newpa.splice(i, 0, '(')
      for (let j = i + 1; j <= newpa.length; ++j) {
        let validpa = [...newpa]
        validpa.splice(j, 0, ')')
        validpa = validpa.join('')
        // console.log('validpa=', validpa)
        res.push(validpa)
      }
    }
    console.log('res=', res)
    console.log('[...new Set(res)]=', [...new Set(res)])
    return [...new Set(res)]
  }
  // console.log('n=', n)
  if (n === 1) return ['()']
  const resm1 = generateParenthesis(n - 1)
  console.log('resm1=', resm1)
  let res = resm1.flatMap((pa) => getAllValidParens(pa))
  console.log('res=', res)
  return [...new Set(res)]
}
console.log(generateParenthesis(3))
