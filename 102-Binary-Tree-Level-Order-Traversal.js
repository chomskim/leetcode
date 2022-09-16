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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  let res = {}
  function inorder(root, level) {
    if (!root) return
    if (res[level]) res[level].push(root.val)
    else res[level] = [root.val]
    inorder(root.left, level + 1)
    inorder(root.right, level + 1)
  }
  inorder(root, 1)
  let ret = Object.keys(res).map((i) => res[i])

  return ret
}
