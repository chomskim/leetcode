/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function mulListNum(nlist, d1, base = 10) {
  let res = nlist.map((n) => n * d1)
  for (let i = nlist.length - 1; i >= 0; --i) {
    if (res[i] >= base) {
      let mod = res[i] % base
      let div = Math.floor(res[i] / base)
      res[i] = mod
      if (i === 0) res.unshift(div)
      else res[i - 1] += div
    }
  }
  return res
}
const multiply = function (num1, num2) {
  if (num1 === '0' || nums === '0') return '0'
  const num1D100 = []
  while (num1.length > 0) {
    let d10 = num1.splice(10)
  }
}
console.log(mulListNum([1, 2, 3, 4, 5], 5))
