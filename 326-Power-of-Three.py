class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0:
            return False

        p3 = 1
        while p3 <= n:
            if p3 == n:
                return True
            p3 *= 3
        return False

