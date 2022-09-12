/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = function (intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0])
  let res = [sorted[0]]
  for (let i = 1; i < sorted.length; ++i) {
    const curIntvr = sorted[i]
    const lastIntvr = res[res.length - 1]
    if (curIntvr[0] <= lastIntvr[1] && curIntvr[1] >= lastIntvr[0]) {
      lastIntvr[0] = Math.min(lastIntvr[0], curIntvr[0])
      lastIntvr[1] = Math.max(lastIntvr[1], curIntvr[1])
    } else {
      res.push(curIntvr)
    }
  }
  return res
}
