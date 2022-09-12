class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        freqDict = {}

        for i in nums:
            if freqDict.get(i) is None:
                freqDict[i] = 1
            else:
                freqDict[i] += 1
        for k in freqDict.keys():
            if freqDict[k] > len(nums) // 2:
                return k

