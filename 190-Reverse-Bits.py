class Solution:
    def reverseBits(self, n: int) -> int:
        binStr = "{:032b}".format(n)
        revStr = binStr[::-1]
        return int(revStr, 2)

