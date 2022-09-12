class Solution:
    def isValid(self, s: str) -> bool:
        PA_MATCH = {")": "(", "]": "[", "}": "{"}
        stack = []
        for pa in s:
            if pa in ["(", "{", "["]:
                stack.append(pa)
            else:
                if len(stack) == 0:
                    return False
                else:
                    match = stack.pop()
                    if match != PA_MATCH[pa]:
                        return False
        if len(stack) > 0:
            return False
        return True
