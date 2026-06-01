class Solution:
    def isValid(self, s: str) -> bool:
        newArr = []

        for i in range(len(s)):
            if (s[i] in ['[', '{', '(']):
                newArr.append(s[i])
            elif (s[i] in [']', '}', ')'] and len(newArr) > 0):
                if (s[i] == ']' and newArr[-1] == '['):
                    newArr.pop()
                elif (s[i] == '}' and newArr[-1] == '{'):
                    newArr.pop()
                elif (s[i] == ')' and newArr[-1] == '('):
                    newArr.pop()
                else:
                    return False
            else:
                return False
        return len(newArr) == 0
                