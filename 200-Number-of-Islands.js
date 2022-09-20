/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const visited = []
  function findComp(sr, sc) {
    const dfStack = []
    const res = []
    dfStack.push([sr, sc])
    while (dfStack.length > 0) {
      const [r, c] = dfStack.pop()
      visited[r][c] = true
      res.push([r, c])
      // console.log(res)
      if (r - 1 >= 0) {
        if (grid[r - 1][c] === '1' && !visited[r - 1][c]) dfStack.push([r - 1, c])
      }
      if (c - 1 >= 0) {
        if (grid[r][c - 1] === '1' && !visited[r][c - 1]) dfStack.push([r, c - 1])
      }
      if (r + 1 < grid.length) {
        if (grid[r + 1][c] === '1' && !visited[r + 1][c]) dfStack.push([r + 1, c])
      }
      if (c + 1 < grid[r].length) {
        if (grid[r][c + 1] === '1' && !visited[r][c + 1]) dfStack.push([r, c + 1])
      }
    }
    return res
  }

  for (let r = 0; r < grid.length; r++) {
    visited.push(new Array(grid[r].length).fill(false))
  }
  const islands = []
  let count = 0
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (!visited[i][j] && grid[i][j] === '1') {
        islands.push(findComp(i, j))
        count += 1
      }
    }
  }
  return islands.length
  // return count
}
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
)
