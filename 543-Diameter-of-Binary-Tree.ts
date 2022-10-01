/**
 * @desc 543. Diameter of Binary Tree
 * @param {TreeNode | null} root
 * @returns {number} the length of the diameter of the tree
 */
let maxval = 0
let mem: { [key: string]: number } = {}

function height(root: TreeNode | null): number {
  if (!root) return 0
  if (root.left === null && root.right === null) {
    mem[JSON.stringify(root)] = 0
    return 0
  }
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
  // console.log(maxval)
  // console.log(hleft, hright, root.left, root.right)
  maxval = Math.max(maxval, hleft + hright + (root.left ? 1 : 0) + (root.right ? 1 : 0))
  return Math.max(hleft, hright) + 1
}
function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0
  maxval = 0
  height(root)
  return maxval
}
