# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    MAX_VALUE = 999

    def getNodeVal(node):
        return Solution.MAX_VALUE if node is None else node.val

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        merged = None
        last = None

        p1 = list1
        p2 = list2
        val1 = Solution.getNodeVal(p1)
        val2 = Solution.getNodeVal(p2)
        while (val1 != Solution.MAX_VALUE) or (val2 != Solution.MAX_VALUE):

            if val1 <= val2:
                newNode = ListNode(val1)
                p1 = p1.next
                val1 = Solution.getNodeVal(p1)
            else:
                newNode = ListNode(val2)
                p2 = p2.next
                val2 = Solution.getNodeVal(p2)

            if merged is None:
                merged = newNode
            else:
                last.next = newNode
            last = newNode
        return merged

