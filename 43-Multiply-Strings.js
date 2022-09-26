/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function mulListNum(nlist, d1, dcount = 1) {
  let base = 10 ** dcount
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
function sumList(nlist1, nlist2, dcount = 1) {
  let base = 10 ** dcount
  let res = []
  let len = Math.max(nlist1.length, nlist2.length)
  if (len > nlist1.length) {
    const diff = len - nlist1.length
    for (let i = 1; i <= diff; ++i) {
      nlist1.unshift(0)
    }
  }
  if (len > nlist2.length) {
    const diff = len - nlist2.length
    for (let i = 1; i <= diff; ++i) {
      nlist2.unshift(0)
    }
  }
  console.log(nlist1, nlist2)
  let ind = len - 1
  let carry = 0
  while (ind >= 0) {
    let sum = carry + nlist1[ind] + nlist2[ind]
    if (sum >= base) {
      sum -= base
      carry = 1
    }
    res.unshift(sum)
    ind -= 1
  }
  if (carry !== 0) {
    res.unshift(carry)
  }
  return res
}
function numToDigitList(num, dcount) {
  let res = []
  let clone = [...num]
  console.log(clone)
  let bp = clone.length
  while (clone.length > 0) {
    bp = Math.max(0, bp - dcount)
    let dlist = clone.splice(bp, dcount)
    let digit = dlist.join('')
    console.log(digit)
    res.unshift(digit)
  }
  return res.map((d) => Number(d))
}

const multiply = function (num1, num2) {
  if (num1 === '0' || nums === '0') return '0'
}
console.log(mulListNum([1, 2, 3, 4, 9], 9))
console.log(sumList([1, 2, 3, 4, 9], [9, 9]))
console.log(numToDigitList('12349000999', 2))
