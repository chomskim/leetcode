/**
 * @desc 230. Kth Smallest Element in a BST
 * @param root : TreeNode | null
 * @param k : number
 * @returns : number
 */
function kthSmallest(root, k) {
    let res = [];
    function inorder(root) {
        if (!root)
            return;
        inorder(root.left);
        if (res.length < k) {
            res.push(root.val);
            if (res.length === k)
                return;
        }
        inorder(root.right);
    }
    inorder(root);
    return res[k - 1];
}
