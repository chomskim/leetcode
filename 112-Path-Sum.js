/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  let found = false
  function preorder(root, curSum) {
    if (found) return
    if (!root) return
    curSum += root.val
    if (!root.left && !root.right && curSum === targetSum) {
      found = true
      return
    }
    preorder(root.left, curSum)
    preorder(root.right, curSum)
  }
  preorder(root, 0)
  return found
}
