/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function buildBTS(low: number, high: number): TreeNode {
    let root: TreeNode
    if (low === high) {
      root = new TreeNode(nums[low])
    } else {
      let mid = Math.floor((low + high) / 2)
      root = new TreeNode(nums[mid])
      if (mid > low) root.left = buildBTS(low, mid - 1)
      if (mid < high) root.right = buildBTS(mid + 1, high)
    }
    return root
  }

  return buildBTS(0, nums.length - 1)
}
