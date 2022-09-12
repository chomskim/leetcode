class Solution:
    def isHappy(self, n: int) -> bool:

        while True:
            decStr = "{:d}".format(n)
            ssq = 0
            for d in decStr:
                ssq += int(d) * int(d)
            if ssq == 1:
                return True
            if ssq == 4:
                return False
            n = ssq
