class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = [[1]]
        for i in range(1, numRows):
            newRow = []
            tempRow = [0] + res[i - 1] + [0]
            for j in range(len(tempRow) - 1):
                newRow.append(tempRow[j] + tempRow[j + 1])
            res.append(newRow)
        return res
