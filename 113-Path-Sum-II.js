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
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  let res = []
  function preorder(root, curSum, curPath) {
    if (!root) return
    curSum += root.val
    let savePath = [...curPath, root.val]
    if (!root.left && !root.right && curSum === targetSum) {
      res.push(savePath)
      return
    }
    preorder(root.left, curSum, savePath)
    preorder(root.right, curSum, savePath)
  }
  preorder(root, 0, [])
  return res
}
