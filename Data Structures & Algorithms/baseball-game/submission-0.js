class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let newArr = []
        let totalScore = 0

        for(let i=0; i<operations.length; i++) {
            let currentValue = operations[i]
            
            if (["D","C","+"].includes(currentValue)) {
                if (currentValue === "D") {
                    let newValue = 2*Number(newArr[newArr.length-1])
                    newArr.push(newValue)
                    totalScore = totalScore + newValue
                } else if (currentValue === "C" && newArr.length !== 0) {
                    let removedValue = Number(newArr.pop())
                    totalScore = totalScore - removedValue
                } else if (currentValue === "+" && newArr.length >= 2) {
                    let newValue = newArr[newArr.length-1] + newArr[newArr.length-2]
                    newArr.push(newValue)
                    totalScore = totalScore + newValue
                }
            } else {
                let newValue = Number(currentValue)
                newArr.push(newValue)
                totalScore = totalScore + newValue
            }
        }
        return totalScore
    }
}
