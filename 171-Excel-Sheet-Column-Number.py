class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        res = 0
        for i, ch in enumerate(columnTitle):
            val = ord(ch) - ord("A") + 1
            res = res * 26 + val
        return res
