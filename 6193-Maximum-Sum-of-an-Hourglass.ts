/**
 * @desc 6193. Maximum Sum of an Hourglass
 * @param grid : number[][];
 * @returns {number}
 */
function maxSum(grid: number[][]): number {
  function hgsum(r: number, c: number): number {
    return (
      grid[r - 1][c - 1] +
      grid[r - 1][c] +
      grid[r - 1][c + 1] +
      grid[r][c] +
      grid[r + 1][c - 1] +
      grid[r + 1][c] +
      grid[r + 1][c + 1]
    )
  }
  let maxSum = 0
  for (let row = 1; row < grid.length - 1; ++row) {
    for (let col = 1; col < grid[row].length - 1; ++col) {
      let tsum = hgsum(row, col)
      if (tsum > maxSum) maxSum = tsum
    }
  }
  return maxSum
}
