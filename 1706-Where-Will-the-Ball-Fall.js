/**
 * @desc 1706. Where Will the Ball Fall
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const len = grid[0].length
  const ballStatus = new Array(len).fill('down')
  const ballPos = Array.from(grid[0].map((_, i) => [0, i]))
  let changed = false
  for (let row = 0; row <= grid.length * 2; ++row) {
    console.log(ballStatus)
    console.log(ballPos)
    for (let b = 0; b < len; ++b) {
      const [r, c] = ballPos[b]
      console.log(ballPos[b], ballStatus[b], grid[r][c])
      switch (ballStatus[b]) {
        case 'down':
          if (grid[r][c] === 1) {
            if (c === len - 1) {
              ballStatus[b] = 'stuck'
            } else {
              ballStatus[b] = 'right'
              ballPos[b] = [r, c + 1]
            }
          } else {
            if (c === 0) {
              ballStatus[b] = 'stuck'
            } else {
              ballStatus[b] = 'left'
              ballPos[b] = [r, c - 1]
            }
          }
          changed = true
          break
        case 'left':
          if (grid[r][c] === 1) {
            ballStatus[b] = 'stuck'
          } else {
            if (r + 1 === grid.length) {
              ballStatus[b] = 'out'
            } else {
              ballStatus[b] = 'down'
              ballPos[b] = [r + 1, c]
            }
          }
          changed = true
          break
        case 'right':
          if (grid[r][c] === -1) {
            ballStatus[b] = 'stuck'
          } else {
            if (r + 1 === grid.length) {
              ballStatus[b] = 'out'
            } else {
              ballStatus[b] = 'down'
              ballPos[b] = [r + 1, c]
            }
          }
          changed = true
          break
        case 'stuck':
          break
        case 'out':
          break
      }
    }
    if (!changed) break
  }
  console.log(ballStatus)
  const res = ballStatus.map((st, i) => (st === 'stuck' ? -1 : ballPos[i][1]))
  return res
}
console.log(
  findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
  ])
)
