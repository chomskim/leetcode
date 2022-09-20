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
 * @return {TreeNode}
 */
const reverseOddLevels = function (root) {
  function countNode(root) {
    if (!root) return 0
    return 1 + countNode(root.left) + countNode(root.right)
  }
  function preorder(root, inlist, pos) {
    if (!root) return
    inlist[pos] = root.val

    preorder(root.left, inlist, 2 * pos + 1)
    preorder(root.right, inlist, 2 * pos + 2)
  }
  function insertLevelOrder(inlist, pos) {
    let root = null
    // Base case for recursion
    if (pos < inlist.length) {
      root = new TreeNode(inlist[pos])
      // console.log(pos, inlist[pos])
      // insert left child
      root.left = insertLevelOrder(inlist, 2 * pos + 1)

      // insert right child
      root.right = insertLevelOrder(inlist, 2 * pos + 2)
    }
    return root
  }
  function reverseInlist(inlist) {
    // reverse inlist
    let mul = 1
    let pos = 2 ** mul - 1
    while (pos < inlist.length) {
      let endp = pos + 2 ** mul
      console.log('(pos,endp)=', pos, endp)
      for (let i = 0; i < 2 ** (mul - 1); i++) {
        console.log('swap', pos + i, endp - i - 1)
        ;[inlist[pos + i], inlist[endp - i - 1]] = [inlist[endp - i - 1], inlist[pos + i]]
      }
      mul += 2
      pos = 2 ** mul - 1
    }
    console.log(inlist)
  }
  const inlist = new Array(countNode(root))
  // const inlist = [2, 3, 5, 8, 13, 21, 34]
  // console.log(inlist)
  preorder(root, inlist, 0)
  console.log(inlist)
  reverseInlist(inlist)
  console.log(inlist)
  const res = insertLevelOrder(inlist, 0)
  return res
}

reverseOddLevels()
