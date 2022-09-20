/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
  console.log(image)
  const origColor = image[sr][sc]
  const res = []
  for (let r = 0; r < image.length; r++) {
    res.push([...image[r]])
  }
  console.log(res)
  const bfQueue = []
  bfQueue.push([sr, sc])
  while (bfQueue.length > 0) {
    const [r, c] = bfQueue.shift()
    console.log(r, c)
    res[r][c] = color
    if (r - 1 >= 0) {
      if (image[r - 1][c] === origColor && res[r - 1][c] !== color) bfQueue.push([r - 1, c])
    }
    if (c - 1 >= 0) {
      if (image[r][c - 1] === origColor && res[r][c - 1] !== color) bfQueue.push([r, c - 1])
    }
    if (r + 1 < image.length) {
      if (image[r + 1][c] === origColor && res[r + 1][c] !== color) bfQueue.push([r + 1, c])
    }
    if (c + 1 < image[r].length) {
      if (image[r][c + 1] === origColor && res[r][c + 1] !== color) bfQueue.push([r, c + 1])
    }
  }
  for (let r = 0; r < image.length; ++r) {
    for (let c = 0; c < image[r].length; ++c) {
      if (res[r][c] === 0) res[r][c] = image[r][c]
    }
  }
  return res
}
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    1,
    0,
    2
  )
)
