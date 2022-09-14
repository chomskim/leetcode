# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        visitedMap = {}

        pos = head
        while pos is not None:
            if visitedMap.get(pos):
                return pos

            visitedMap[pos] = True
            pos = pos.next

        return None
        