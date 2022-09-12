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
 * @return {number}
 */
const buildTileTree = function (root) {
  if (root === null) return null
  const leftVal = root.left ? findSum(root.left) : 0
  const rigetVal = root.right ? findSum(root.right) : 0

  const tiltVal = Math.abs(leftVal - rigetVal)
  const tiltLeft = buildTileTree(root.left)
  const tiltRight = buildTileTree(root.right)

  return new TreeNode(tiltVal, tiltLeft, tiltRight)
}
const findSum = function (root) {
  if (root === null) return 0
  return root.val + findSum(root.left) + findSum(root.right)
}
const findTilt = function (root) {
  const tiltTree = buildTileTree(root)
  return findSum(tiltTree)
}
