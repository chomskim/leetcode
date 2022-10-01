/**
 * @desc 621. Task Scheduler
 * @param tasks
 * @param n
 * @returns number the least number of units of times that the CPU will take to finish all the given tasks.
 */
function leastInterval(tasks: string[], n: number): number {
  let freqMap: { [key: string]: number } = {}
  let maxTaskCount = 0
  for (let i = 0; i < tasks.length; ++i) {
    if (freqMap[tasks[i]]) {
      freqMap[tasks[i]] += 1
      if (freqMap[tasks[i]] > maxTaskCount) {
        maxTaskCount = freqMap[tasks[i]]
      }
    } else {
      freqMap[tasks[i]] = 1
    }
  }
  let keys = Object.keys(freqMap)
  let sameCount = 0
  for (let i = 0; i < keys.length; ++i) {
    if (freqMap[keys[i]] == maxTaskCount) {
      sameCount += 1
    }
  }
  return Math.max(tasks.length, sameCount + (maxTaskCount - 1) * (n + 1))
}
console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2))
