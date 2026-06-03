class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class MyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if (index <= 0 || index >= this.size) {
            return null
        }

        let curr = this.head
        for (let i=0; i<index-1; i++) {
            curr = curr.next
        }

        return curr
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1
        }

        let curr = this.head

        if (index === 0) {
            return curr.val
        }
        
        for (let i=0; i<index; i++) {
            curr = curr.next
        }

        return curr.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let new_node = new Node(val)
        new_node.next = this.head
        
        this.head = new_node
        this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        if (this.size === 0) {
            this.addAtHead(val)
            return
        }

        let curr = this.head

        while(curr.next !== null) {
            curr = curr.next
        }

        let new_node = new Node(val)
        curr.next = new_node

        this.size++
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return null
        }

        if (index === 0) {
            this.addAtHead(val)
        }

        if (index === this.size) {
            this.addAtTail(val)
            return
        }

        let new_node = new Node(val)
        let prev_node = this.getPrev(index)
        
        new_node.next = prev_node.next
        prev_node.next = new_node

        this.size++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next
            this.size--
            return
        }

        let prev_node = this.getPrev(index)
        let next_node = prev_node.next.next

        prev_node.next = next_node

        this.size--
    }
}
