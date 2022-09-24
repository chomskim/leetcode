/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const freqMap = {}
  words.forEach((w) => {
    if (freqMap[w]) freqMap[w] += 1
    else freqMap[w] = 1
  })
  console.log(freqMap)
  let freqList = Object.keys(freqMap)
    .map((k) => [k, freqMap[k]])
    .sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
  console.log(freqList)
  return freqList.slice(0, k).map((pa) => pa[0])
}
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3))
