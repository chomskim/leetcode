class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:

        sor = sorted(nums)
        for i, v in enumerate(sor):
            if i == len(sor) - 1:
                return False
            if sor[i] == sor[i + 1]:
                return True

