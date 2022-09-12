# not solution, just nearest int
class Solution:
    def mySqrt(self, x: int) -> int:
        hi = x
        lo = 1

        gap = x
        oldRes = x
        while True:
            res = (hi + lo) // 2
            newGap = x - res * res
            if abs(newGap) == 0:
                return res
            if abs(newGap) > gap:
                return oldRes
            else:
                gap = abs(newGap)
            if newGap < 0:
                hi = res
            else:
                lo = res
            oldRes = res

