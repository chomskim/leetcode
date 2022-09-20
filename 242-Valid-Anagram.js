/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  fd1 = {}
  fd2 = {}
  for (let i = 0; i < s.length; ++i) {
    if (!fd1[s.charAt(i)]) fd1[s.charAt(i)] = 1
    else fd1[s.charAt(i)] += 1
  }
  for (let i = 0; i < t.length; ++i) {
    if (!fd2[t.charAt(i)]) fd2[t.charAt(i)] = 1
    else fd2[t.charAt(i)] += 1
  }
  console.log(fd1)
  console.log(fd2)
  if (Object.keys(fd1).length !== Object.keys(fd2).length) return false
  for (let k = 0; k < Object.keys(fd1).length; ++k) {
    let key = Object.keys(fd1)[k]
    if (!fd2[key]) return false
    if (fd1[key] !== fd2[key]) return false
  }
  return true
}
console.log(isAnagram('rat', 'car'))
