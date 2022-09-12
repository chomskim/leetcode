class Solution:
    def firstUniqChar(self, s: str) -> int:

        freqDict = {}
        for i, ch in enumerate(s):
            if freqDict.get(ch) is None:
                freqDict[ch] = (True, i)
            else:
                freqDict[ch] = (False, i)
        for k in freqDict.keys():
            if freqDict[k][0]:
                return freqDict[k][1]
        return -1

