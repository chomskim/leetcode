class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        fd1 = {}
        fd2 = {}
        for i in s:
            if fd1.get(i) is None:
                fd1[i] = 1
            else:
                fd1[i] += 1

        for i in t:
            if fd2.get(i) is None:
                fd2[i] = 1
            else:
                fd2[i] += 1
        for k in set(fd1.keys()) | set(fd2.keys()):
            if fd1.get(k) != fd2.get(k):
                return False
        return True

