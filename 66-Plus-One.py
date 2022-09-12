class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        pos = len(digits) - 1
        carry = 0
        digits[pos] += 1
        while True:
            if pos < 0:
                if carry == 1:
                    digits.insert(0, carry)
                return digits
            digits[pos] += carry
            if digits[pos] >= 10:
                digits[pos] -= 10
                carry = 1
            else:
                carry = 0
            pos -= 1

