/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxArea = 0
  let fp = 0
  let bp = height.length - 1
  while (fp < bp) {
    let w = bp - fp
    let h
    if (height[fp] < height[bp]) {
      h = height[fp]
      fp += 1
    } else {
      h = height[bp]
      bp -= 1
    }
    let area = w * h
    if (area > maxArea) maxArea = area
  }
  return maxArea
}
