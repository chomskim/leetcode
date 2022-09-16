/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root) {
  let res = []
  if (!root) return res
  res.push(root.val)
  root.children.forEach((child) => res.push(...preorder(child)))
  return res
}
