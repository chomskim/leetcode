/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const empty = new Array(matrix.length)
  for (let i = 0; i < matrix.length; ++i) {
    empty[i] = new Array(matrix[i].length).fill(true)
  }
  console.log(empty)
  const ROW_MAX = matrix.length
  const COL_MAX = matrix[0].length
  let res = []
  let row = 0
  let col = 0
  let dir = 'right'

  let finished = false
  while (!finished) {
    console.log(row, col)
    res.push(matrix[row][col])
    empty[row][col] = false
    console.log(res)
    switch (dir) {
      case 'right':
        if (col + 1 < COL_MAX && empty[row][col + 1]) {
          col += 1
        } else if (row + 1 < ROW_MAX && empty[row + 1][col]) {
          dir = 'down'
          row += 1
        } else {
          finished = true
        }
        break
      case 'down':
        if (row + 1 < ROW_MAX && empty[row + 1][col]) {
          row += 1
        } else if (col - 1 >= 0 && empty[row][col - 1]) {
          dir = 'left'
          col -= 1
        } else {
          finished = true
        }
        break
      case 'left':
        if (col - 1 >= 0 && empty[row][col - 1]) {
          col -= 1
        } else if (row - 1 >= 0 && empty[row - 1][col]) {
          dir = 'up'
          row -= 1
        } else {
          finished = true
        }
        break
      case 'up':
        if (row - 1 >= 0 && empty[row - 1][col]) {
          row -= 1
        } else if (col + 1 < COL_MAX && empty[row][col + 1]) {
          dir = 'right'
          col += 1
        } else {
          finished = true
        }
        break
    }
  }
  return res
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
