/**
 *
 * @param root : TreeNode | null
 * @param k : number
 * @returns boolean -- true if there exist two elements in the BST such that their sum is equal to the given target
 */
function findTarget(root: TreeNode | null, k: number): boolean {
  let sor: number[] = []
  function inorder(root: TreeNode | null) {
    if (!root) return
    inorder(root.left)
    sor.push(root.val)
    inorder(root.right)
  }
  function search(root: TreeNode | null, target: number): boolean {
    if (!root) return false
    if (target === root.val) return true
    if (target < root.val) return search(root.left, target)
    return search(root.right, target)
  }
  inorder(root)
  for (let i = 0; i < sor.length - 1; ++i) {
    if (sor[i] === k - sor[i]) return false
    if (search(root, k - sor[i])) return true
  }
  return false
}
