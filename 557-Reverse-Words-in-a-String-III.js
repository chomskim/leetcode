/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  function reverseString(s) {
    return s.split('').reverse().join('')
  }
  return s.split(' ').map(reverseString).join(' ')
}
console.log(reverseWords("Let's take LeetCode contest"))
