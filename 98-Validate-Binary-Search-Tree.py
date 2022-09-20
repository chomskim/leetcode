# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    inlist = []

    def inorder(root):
        if root is None:
            return
        Solution.inorder(root.left)
        Solution.inlist.append(root.val)
        Solution.inorder(root.right)

    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        Solution.inorder(root)
        if len(Solution.inlist) <= 1:
            return True
        for i, _ in enumerate(Solution.inlist[:-1]):
            if Solution.inlist[i] >= Solution.inlist[i + 1]:
                return False
        return True

