class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        sor = sorted(nums)
        for i in range(n):
            if i != sor[i]:
                return i
        return n
