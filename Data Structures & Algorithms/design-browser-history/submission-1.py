class Node:
    def __init__(self, url: str):
        self.url = url
        self.prev = None
        self.next = None


class BrowserHistory:

    def __init__(self, homepage: str):
        self.current = Node(homepage)
        

    def visit(self, url: str) -> None:
        newNode = Node(url)
        
        self.current.next = newNode
        newNode.prev = self.current

        self.current = newNode
        

    def back(self, steps: int) -> str:
        for i in range(steps):
            if (self.current.prev == None):
                break

            self.current = self.current.prev

        return self.current.url
        

    def forward(self, steps: int) -> str:
        for i in range(steps):
            if (self.current.next == None):
                break

            self.current = self.current.next

        return self.current.url
        


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)