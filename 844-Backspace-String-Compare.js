/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  let sstack = []
  let tstack = []
  s.split('').forEach((ch) => {
    if (ch === '#') {
      if (sstack.length > 0) sstack.pop()
    } else {
      sstack.push(ch)
    }
  })
  t.split('').forEach((ch) => {
    if (ch === '#') {
      if (tstack.length > 0) tstack.pop()
    } else {
      tstack.push(ch)
    }
  })
  if (sstack.length !== tstack.length) return false
  for (let i = 0; i < sstack.length; ++i) {
    if (sstack[i] !== tstack[i]) return false
  }
  return true
}
console.log(backspaceCompare('ab##', 'c#d#'))
