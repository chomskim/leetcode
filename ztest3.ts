/**
 * @desc 6194. Minimize XOR
 * @param num1
 * @param num2
 */
function minimizeXor(num1: number, num2: number): number {
  const bnum1 = num1.toString(2).split('')
  const bnum2 = num2.toString(2).split('')
  let setbits = bnum2.filter((b) => b === '1').length
  const pcount = setbits - bnum1.length
  for (let i = 1; i <= pcount; ++i) {
    bnum1.unshift('0')
  }
  console.log(bnum1, bnum2, setbits)

  const bres = new Array(Math.max(bnum1.length, setbits)).fill('0')
  console.log(bres)
  let fp = 0
  while (setbits > 0) {
    if (bnum1[fp] === '1') {
      bres[fp] = '1'
      setbits -= 1
    }
    fp += 1
    if (fp === bres.length) break
  }
  let bp = bres.length - 1
  while (setbits > 0) {
    if (bnum1[bp] === '0') {
      bres[bp] = '1'
      setbits -= 1
    }
    bp -= 1
    if (bp < 0) break
  }
  console.log(bres)
  const res = parseInt(bres.join(''), 2)
  return res
}
console.log(minimizeXor(1, 536870911))
