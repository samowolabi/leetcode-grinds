class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const original = [...arr]

        for(let i=0; i<arr.length; i++) {
            if(i === (arr.length-1)) {
                arr[i] = -1
            } else {
                let maxNumber = original[i + 1]

                for(let j=i+1; j<original.length; j++) {
                    if (original[j] > maxNumber) {
                        maxNumber=original[j]
                    }
                }
                arr[i]=maxNumber
            }
        }
        return arr
    }
}
