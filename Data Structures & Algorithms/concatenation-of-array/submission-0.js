class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArr = []
        for(let i=1; i<=2; i++) {
            for(let j=0; j<nums.length; j++) {
                newArr[newArr.length]=nums[j]
            }
        }
        return newArr
    }
}
