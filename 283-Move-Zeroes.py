class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        pos = 0
        newNums = []
        for el in nums:
            if el != 0:
                newNums.append(el)
        for i in range(len(nums) - len(newNums)):
            newNums.append(0)

        for i, el in enumerate(newNums):
            nums[i] = newNums[i]

