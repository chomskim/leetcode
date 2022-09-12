# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:

        visited = []
        while True:
            if head is None:
                pos = -1
                return False
            if head in visited:
                pos = head
                return True
            visited.append(head)
            head = head.next

