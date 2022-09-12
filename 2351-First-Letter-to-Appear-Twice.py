class Solution:
    def repeatedCharacter(self, s: str) -> str:
        freqDict = {}

        for i, ch in enumerate(s):
            if freqDict.get(ch) is None:
                freqDict[ch] = 1
            else:
                freqDict[ch] += 1
                if freqDict[ch] == 2:
                    return ch

        return "*"
