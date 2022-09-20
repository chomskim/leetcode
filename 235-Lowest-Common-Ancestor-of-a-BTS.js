/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  function findAncestor(t, n) {
    const ancStack = []
    const serStack = []
    ancStack.push(t)
    serStack.push(t)
    while (serStack.length > 0) {
      const cur = serStack.pop()
      if (cur.val === n.val) {
        ancStack.push(n)
        return ancStack
      } else if (n.val < cur.val) {
        serStack.push(cur.left)
        ancStack.push(cur.left)
      } else if (n.val > cur.val) {
        serStack.push(cur.right)
        ancStack.push(cur.right)
      }
    }
  }
  function findCommonAncestor(t, n, comm) {
    const serStack = []
    serStack.push(t)
    let curCommon = t
    while (serStack.length > 0) {
      const cur = serStack.pop()
      if (comm.includes(cur)) curCommon = cur
      if (cur.val === n.val) {
        return curCommon
      } else if (n.val < cur.val) {
        serStack.push(cur.left)
      } else if (n.val > cur.val) {
        serStack.push(cur.right)
      }
    }
  }
  const ancP = findAncestor(root, p)
  const res = findCommonAncestor(root, q, ancP)
  return res
}
