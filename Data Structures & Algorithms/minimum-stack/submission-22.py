class MinStack:

    def __init__(self):
        self.stack = []
        self.minimumStack = [];
        

    def push(self, val: int) -> None:
        self.stack.append(val)

        if (
            len(self.minimumStack) == 0 or
            val <= self.minimumStack[-1]
        ):
            self.minimumStack.append(val)
        

    def pop(self) -> None:
        removedNum = self.stack.pop();

        if (removedNum == self.minimumStack[-1]):
            self.minimumStack.pop();
        

    def top(self) -> int:
        return self.stack[-1];
        

    def getMin(self) -> int:
        return self.minimumStack[-1];
        
