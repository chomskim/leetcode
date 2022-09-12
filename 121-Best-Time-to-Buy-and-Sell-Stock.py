## I can't solve this problem
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # priceWithDays = list(enumerate(prices))
        # sortedPrice = sorted(priceWithDays,key=lambda x:x[1])

        maxval = 0
        for i in range(len(prices)):
            buyPrice = prices[i]
            for j in range(i, len(prices)):
                selPrice = prices[j]
                profit = selPrice - buyPrice
                if profit > maxval:
                    maxval = profit
        return maxval
