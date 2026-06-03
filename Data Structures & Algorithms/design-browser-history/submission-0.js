class Node {
    constructor(url) {
        this.val = url
        this.prev = null
        this.next = null
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.current = new Node(homepage)
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let newNode = new Node(url)
        
        this.current.next = newNode
        newNode.prev = this.current

        this.current = newNode
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        for (let i=0; i<steps; i++) {
            if (this.current.prev === null) {
                break
            }

            this.current = this.current.prev
        }

        return this.current.val
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        for (let i=0; i<steps; i++) {
            if (this.current.next === null) {
                break
            }

            this.current = this.current.next
        }
        
        return this.current.val
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
