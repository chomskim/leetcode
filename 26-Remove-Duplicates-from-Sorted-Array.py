class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        prev = None
        for i in range(len(nums) - 1, -1, -1):
            if prev is None:
                prev = nums[i]
            else:
                if nums[i] == prev:
                    del nums[i + 1]
                prev = nums[i]
        return len(nums)

