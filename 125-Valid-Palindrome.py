class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = s.lower()
        newStrList = [ch for ch in newStr if ch.isalnum()]
        newStr = "".join(newStrList)

        fp = 0
        bp = len(newStr) - 1

        while fp <= bp:
            if newStr[fp] != newStr[bp]:
                return False
            fp += 1
            bp -= 1
        return True

