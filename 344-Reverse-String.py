class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        mid = len(s) // 2
        for i in range(mid):
            fch = s[i]
            bch = s[-i - 1]
            s[i] = bch
            s[-i - 1] = fch

