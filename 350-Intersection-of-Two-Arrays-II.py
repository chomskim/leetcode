class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:

        sor1 = sorted(nums1)
        sor2 = sorted(nums2)

        res = []
        pos1 = 0
        pos2 = 0
        while True:
            if pos1 >= len(sor1):
                break
            if pos2 >= len(sor2):
                break
            if sor1[pos1] < sor2[pos2]:
                pos1 += 1
            elif sor1[pos1] > sor2[pos2]:
                pos2 += 1
            else:
                res.append(sor1[pos1])
                pos1 += 1
                pos2 += 1

        return res
