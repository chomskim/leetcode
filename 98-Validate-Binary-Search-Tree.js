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
 * @return {boolean}
 */
const isValidBST = function (root) {
  let inlist = []
  function inorder(root) {
    if (!root) return
    inorder(root.left)
    inlist.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  for (let i = 0; i < inlist.length - 1; ++i) {
    if (inlist[i] >= inlist[i + 1]) return false
  }
  return true
}
