class BSTIterator {
  done: boolean = false
  list: number[] = []
  iter: any
  constructor(root: TreeNode | null) {
    this.inorder(root)
    this.iter = this.iterator(this.list)
  }
  inorder(root: TreeNode | null) {
    if (!root) return
    this.inorder(root.left)
    this.list.push(root.val)
    this.inorder(root.right)
  }
  *iterator(list: number[]): IterableIterator<number> {
    for (let i = 0; i < list.length - 1; ++i) {
      if (i < list.length - 1) yield list[i]
    }
    return list[list.length - 1]
  }
  next(): number {
    const { value, done } = this.iter.next()
    this.done = done
    return value
  }
  hasNext(): boolean {
    return !this.done
  }
}
