/**
 *
 * @param {TreeNode | null} root
 * @returns {boolean} if it is height-balanced or not
 */
let mem: { [key: string]: number } = {}
function height(root: TreeNode | null): number {
  if (!root) return 0
  let hleft: number
  let hright: number
  if (mem[JSON.stringify(root.left)]) {
    hleft = mem[JSON.stringify(root.left)]
  } else {
    hleft = height(root.left)
    mem[JSON.stringify(root.left)] = hleft
  }
  if (mem[JSON.stringify(root.right)]) {
    hright = mem[JSON.stringify(root.right)]
  } else {
    hright = height(root.right)
    mem[JSON.stringify(root.right)] = hright
  }

  return Math.max(hleft, hright) + 1
}
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(root.left) - height(root.right)) <= 1
}
