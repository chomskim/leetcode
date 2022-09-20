/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  let f0 = 0
  let f1 = 1
  for (let i = 0; i < n; i++) {
    let t = f1
    f1 = f0 + f1
    f0 = t
  }
  return f0
}
console.log([1, 5, 7].map(fib))
