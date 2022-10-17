/**
 * @desc 230. Kth Smallest Element in a BST
 * @param root : TreeNode | null
 * @param k : number
 * @returns : number
 */
function kthSmallest(root: TreeNode | null, k: number): number {
  let res: number[] = []
  function inorder(root: TreeNode | null) {
    if (!root) return
    inorder(root.left)
    if (res.length < k) {
      res.push(root.val)
      if (res.length === k) return
    }
    inorder(root.right)
  }
  inorder(root)
  return res[k - 1]
}
