/**
 * @desc 91. Decode Ways
 * @param {string} s
 * @returns {number} the number of ways to decode it
 */
let decMem: { [key: string]: number } = {}
function dec2(s: string): number {
  // s.length === 2
  if (s.charAt(0) === '0') return 0
  if (s.charAt(1) === '0') {
    if (s.charAt(0) === '1' || s.charAt(0) === '2') return 1
    else return 0
  }
  if (Number(s) <= 26) return 2
  return 1
}
function decd2(s: string): number {
  if (Number(s) <= 26) return 1
  else return 0
}
function numDecodings(s: string): number {
  if (s.charAt(0) === '0') return 0
  if (s.length === 1) return 1
  if (s.length === 2) {
    return dec2(s)
  }
  let s1 = s.slice(1)
  let s2 = s.slice(2)
  let num1 = 0
  let num2 = 0
  if (!decMem[s1]) decMem[s1] = numDecodings(s1)
  num1 = decMem[s1]
  if (!decMem[s2] && decd2(s.slice(0, 2))) decMem[s2] = numDecodings(s2)
  num2 = decd2(s.slice(0, 2)) ? decMem[s2] : 0
  let res = num1 + num2
  // decMem[s] = res
  console.log(s, num1, num2, res, decd2(s.slice(0, 2)))
  return res
}

console.log(
  numDecodings('6178223277994376293151954655831386706428644944546637715218144618655386317329131929225926531946265235')
)
