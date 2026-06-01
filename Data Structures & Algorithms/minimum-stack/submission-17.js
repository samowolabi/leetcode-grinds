class MinStack {
    constructor() {
        this.stack = [];
        this.minimumStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        if (this.stack.length === 1) {
            this.minimumStack.push(val)
        } else {
            let lastMinStack = this.minimumStack[this.minimumStack.length - 1]
            if (val <= lastMinStack) {
                this.minimumStack.push(val)
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let removedNum = this.stack.pop()

        if (this.stack.length === 1) {
            this.minimumStack.push(this.stack[0])
        } else {
            let lastMinStack = this.minimumStack[this.minimumStack.length - 1]
            if (removedNum === lastMinStack) {
                this.minimumStack.pop()
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimumStack[this.minimumStack.length - 1]
    }
}
