/**
 * @desc 1662. Check If Two String Arrays are Equivalent
 * @param word1
 * @param word2
 */
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const str1 = word1.join('')
  const str2 = word2.join('')
  return str1 === str2
}
