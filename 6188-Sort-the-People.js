/**
 * 6188. Sort the People
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function (names, heights) {
  let obj = {}
  for (let i = 0; i < names.length; ++i) {
    obj[heights[i]] = names[i]
  }
  let res = heights.sort((a, b) => b - a).map((h) => obj[h])
  return res
}
console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]))
