/**
 *
 * @param {TreeNode | null} root
 * @returns {boolean} if it is height-balanced or not
 */
let mem = {};
function height(root) {
    if (!root)
        return 0;
    let hleft;
    let hright;
    if (mem[JSON.stringify(root.left)]) {
        hleft = mem[JSON.stringify(root.left)];
    }
    else {
        hleft = height(root.left);
        mem[JSON.stringify(root.left)] = hleft;
    }
    if (mem[JSON.stringify(root.right)]) {
        hright = mem[JSON.stringify(root.right)];
    }
    else {
        hright = height(root.right);
        mem[JSON.stringify(root.right)] = hright;
    }
    return Math.max(hleft, hright) + 1;
}
function isBalanced(root) {
    if (!root)
        return true;
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(root.left) - height(root.right)) <= 1;
}
