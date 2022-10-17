class BSTIterator {
    constructor(root) {
        this.done = false;
        this.list = [];
        this.inorder(root);
        this.iter = this.iterator(this.list);
    }
    inorder(root) {
        if (!root)
            return;
        this.inorder(root.left);
        this.list.push(root.val);
        this.inorder(root.right);
    }
    *iterator(list) {
        for (let i = 0; i < list.length - 1; ++i) {
            if (i < list.length - 1)
                yield list[i];
        }
        return list[list.length - 1];
    }
    next() {
        const { value, done } = this.iter.next();
        this.done = done;
        return value;
    }
    hasNext() {
        return !this.done;
    }
}
