/**
 * @desc 1832. Check if the Sentence Is Pangram
 * @param sentence {string}
 * @returns {boolean}
 */
function checkIfPangram(sentence: string): boolean {
  const alphaMap: { [key: string]: boolean } = {}
  let pos = 0
  while (pos < sentence.length) {
    let ch = sentence.charAt(pos)
    if (!alphaMap[ch]) {
      alphaMap[ch] = true
      if (Object.keys(alphaMap).length === 26) return true
    }
    pos += 1
  }
  return false
}
console.log(checkIfPangram('leetcode'))
