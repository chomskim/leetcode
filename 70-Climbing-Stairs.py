class Solution:
    mem = {}

    def climbStairs(self, n: int) -> int:
        if n == 0:
            return 1
        if n == 1:
            return 1
        if n in self.mem.keys():
            return self.mem[n]

        res = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        self.mem[n] = res
        return res
