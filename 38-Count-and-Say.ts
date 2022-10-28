/**
 * @desc Count and Say
 * @param n {number}
 * @returns {string}
 */
function countAndSay(n: number): string {
  function toSayString(say: string): string {
    const slist: string[] = say.toString().split('')
    let fp = 0
    let res = ''
    while (fp < slist.length) {
      let sameCount = 1
      if (fp === slist.length - 1) {
        res += '1' + slist[fp]
        break
      }
      while (slist[fp] === slist[fp + sameCount]) {
        sameCount += 1
      }
      res += sameCount + slist[fp]
      fp += sameCount
    }
    return res
  }
  if (n === 1) return '1'
  return toSayString(countAndSay(n - 1))
}
console.log(countAndSay(4))
