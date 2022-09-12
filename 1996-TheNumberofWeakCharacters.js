/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function (properties) {
  let weakCount = 0
  sorted = [...properties]
  sorted.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
  console.log(sorted)
  for (let i = 0; i < sorted.length - 1; ++i) {
    let isWeak = false
    for (j = i + 1; j < sorted.length; ++j) {
      if (sorted[i][0] < sorted[j][0] && sorted[i][1] < sorted[j][1]) {
        isWeak = true
        break
      }
    }
    if (isWeak) weakCount += 1
  }
  return weakCount
}
console.log(
  numberOfWeakCharacters([
    [2, 2],
    [3, 3],
  ])
)
