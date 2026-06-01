class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let current = 0
        let max = 0

        for (let i=0; i<nums.length; i++) {
            if (nums[i] === 1) {
                current++

                if (max < current) {
                    max=current
                }
            } else {
                current=0
            }
        }
        return max
    }
}
