class Solution:
    def hammingWeight(self, n: int) -> int:
        binStr = "{:b}".format(n)
        res = 0
        for ch in binStr:
            if ch == "1":
                res += 1
        return res
