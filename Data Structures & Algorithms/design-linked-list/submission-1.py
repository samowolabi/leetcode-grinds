class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class MyLinkedList:

    def __init__(self):
        self.head = None
        self.size = 0
        
    def getPrev(self, index: int):
        if (index <= 0 or index >= self.size):
            return None

        curr = self.head

        for i in range(index-1):
            curr = curr.next

        return curr

    def get(self, index: int) -> int:
        if (index < 0 or index >= self.size):
            return -1

        curr = self.head

        if (index == 0):
            return curr.val

        for i in range(index):
            curr = curr.next

        return curr.val
        

    def addAtHead(self, val: int) -> None:
        new_node = Node(val)
        new_node.next = self.head
        
        self.head = new_node
        self.size+=1
        

    def addAtTail(self, val: int) -> None:
        if (self.size == 0):
            self.addAtHead(val)
            return

        curr = self.head

        while(curr.next != None):
            curr = curr.next

        new_node = Node(val)
        curr.next = new_node

        self.size+=1
        

    def addAtIndex(self, index: int, val: int) -> None:
        if (index < 0 or index > self.size):
            return None

        if (index == 0):
            self.addAtHead(val)

        if (index == self.size):
            self.addAtTail(val)
            return

        new_node = Node(val)
        prev_node = self.getPrev(index)
        
        new_node.next = prev_node.next
        prev_node.next = new_node

        self.size+=1
        

    def deleteAtIndex(self, index: int) -> None:
        if (index < 0 or index >= self.size):
            return None

        if (index == 0):
            self.head = self.head.next
            self.size-=1
            return

        prev_node = self.getPrev(index)
        next_node = prev_node.next.next

        prev_node.next = next_node

        self.size-=1
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)