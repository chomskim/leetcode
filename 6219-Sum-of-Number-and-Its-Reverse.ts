/**
 * @desc 6219. Sum of Number and Its Reverse
 * @param num
 */
function sumOfNumberAndReverse(num: number): boolean {
  if (num === 0) return true
  const nlist = [...num.toString()]
  function padZeros(num: number, digits: number): string {
    return num.toString().padStart(digits, '0')
  }
  for (let i = 1; i < num; ++i) {
    const digits = i.toString().length
    const revi = parseInt([...padZeros(i, digits)].reverse().join(''))
    if (i + revi === num) {
      console.log(i, revi)
      return true
    }
  }
  return false
}
console.log(sumOfNumberAndReverse(10))
