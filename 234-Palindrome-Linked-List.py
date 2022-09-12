# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        lis = []
        while head is not None:
            lis.append(head.val)
            head = head.next

        fp = 0
        bp = len(lis) - 1

        while fp <= bp:
            if lis[fp] != lis[bp]:
                return False
            fp += 1
            bp -= 1
        return True
