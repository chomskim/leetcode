# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Not solved for balanced
class Solution:
    def insertBTS(root: TreeNode, val):

        cur = root
        while True:
            if cur.val == val:
                # Find and insert to right
                newNode = TreeNode(val, None, cur.right)
                cur.right = newNode
                return
            if val < cur.val:
                if cur.left is None:
                    cur.left = TreeNode(val)
                    return
                else:
                    cur = cur.left
            if val > cur.val:
                if cur.right is None:
                    cur.right = TreeNode(val)
                    return
                else:
                    cur = cur.right

    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if len(nums) == 0:
            return None

        res = TreeNode(nums[0])
        for r in nums[1:]:
            Solution.insertBTS(res, r)
        return res

