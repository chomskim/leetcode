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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0
  function findPathFromRoot(root: TreeNode | null, curSum: number) {
    if (!root) return
    curSum += root.val
    if (curSum === targetSum) {
      res += 1
    }
    findPathFromRoot(root.left, curSum)
    findPathFromRoot(root.right, curSum)
  }
  function postorder(root: TreeNode | null) {
    if (!root) return
    postorder(root.left)
    postorder(root.right)
    findPathFromRoot(root, 0)
  }
  postorder(root)
  return res
}
