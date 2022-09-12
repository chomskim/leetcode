/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const noteList = [...ransomNote]
  const magList = [...magazine]
  let noteAlphaCount = Array(26).fill(0)
  let magAlphaCount = Array(26).fill(0)

  const ord = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0)

  noteList.forEach((ch) => {
    noteAlphaCount[ord(ch)] += 1
  })
  magList.forEach((ch) => {
    magAlphaCount[ord(ch)] += 1
  })

  for (let i = 0; i < 26; ++i) {
    if (magAlphaCount[i] < noteAlphaCount[i]) return false
  }
  return true
}
