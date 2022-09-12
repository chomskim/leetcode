/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  const sortedBoxTypes = [...boxTypes].sort((a, b) => b[1] - a[1])
  const loadedBoxTypes = []
  let loadedCount = 0
  let loadedUnits = 0

  console.log(sortedBoxTypes)

  for (let i = 0; i < sortedBoxTypes.length; ++i) {
    let space = truckSize - loadedCount
    if (space <= 0) break
    let toLoad = Math.min(space, sortedBoxTypes[i][0])
    loadedBoxTypes.push([toLoad, sortedBoxTypes[i][1]])
    loadedCount += toLoad
    loadedUnits += toLoad * sortedBoxTypes[i][1]
  }

  console.log(loadedBoxTypes)
  // return loadedBoxTypes.reduce((cum, cur) => cum + cur[0] * cur[1], 0)
  return loadedUnits
}
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
)
