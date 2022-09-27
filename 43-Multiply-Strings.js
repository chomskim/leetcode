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
function sum2Lists(nlist1, nlist2, dcount = 1) {
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
    } else {
      carry = 0
    }
    res.unshift(sum)
    ind -= 1
  }
  if (carry !== 0) {
    res.unshift(carry)
  }
  return res
}
function numToDigitList(num, dcount = 1) {
  let res = []
  let clone = [...num]
  // console.log(clone)
  let bp = clone.length
  while (clone.length > 0) {
    bp = Math.max(0, bp - dcount)
    let dlist = clone.splice(bp, dcount)
    let digit = dlist.join('')
    // console.log(digit)
    res.unshift(digit)
  }
  return res.map((d) => Number(d))
}
function digitListToNumStr(dlist, dcount) {
  return dlist.map((d, i) => (i === 0 ? String(d) : String(d).padStart(dcount, '0'))).join('')
}

const multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const dcount = 4 // 4 is faster than 1
  let nlist1 = numToDigitList(num1, dcount)
  let nlist2 = numToDigitList(num2, dcount)

  let mulList = [...nlist1]
  let sumli = [0]
  for (let i = nlist2.length - 1; i >= 0; --i) {
    // console.log(mulList)
    let mul1 = mulListNum(mulList, nlist2[i], dcount)
    // console.log(mul1)
    sumli = sum2Lists(sumli, mul1, dcount)
    // console.log(sumli)
    mulList.push(0)
  }
  return digitListToNumStr(sumli, dcount)
}
console.log(mulListNum([1, 2, 3, 4, 9], 9))
console.log(sum2Lists([1, 2, 3, 4, 9], [0]))
console.log(numToDigitList('12349000999', 2))
console.log(digitListToNumStr(numToDigitList('12349000999', 2), 2))
console.log(multiply('123', '456'))
