/**
 * @desc 838. Push Dominoes
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
  const domList = [...dominoes]
  while (true) {
    let changed = false
    const prev = [...domList]
    for (let i = 0; i < domList.length; ++i) {
      if (prev[i] === '.') {
        const left = i === 0 ? 'L' : prev[i - 1]
        const right = i === prev.length - 1 ? 'R' : prev[i + 1]
        if (left === 'R' && right !== 'L') {
          domList[i] = 'R'
          changed = true
        } else if (left !== 'R' && right === 'L') {
          domList[i] = 'L'
          changed = true
        }
      }
    }
    if (!changed) break
  }
  return domList.join('')
}
console.log(pushDominoes('.L.R...LR..L..'))
