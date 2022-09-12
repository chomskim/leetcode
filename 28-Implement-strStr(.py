class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i in range(0, len(haystack) - len(needle) + 1):
            match = True
            for j in range(len(needle)):
                if haystack[i + j] != needle[j]:
                    match = False
                    break
            if match:
                return i
        return -1

