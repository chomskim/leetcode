class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        pos1 = 0
        pos2 = 0
        pass1 = 0
        while True:
            if pos1 >= m + n or pos2 >= n:
                return
            if nums2[pos2] <= nums1[pos1] or pass1 >= m:
                nums1.insert(pos1, nums2[pos2])
                nums1.pop()
                pos1 += 1
                pos2 += 1
            else:
                pos1 += 1
                pass1 += 1

