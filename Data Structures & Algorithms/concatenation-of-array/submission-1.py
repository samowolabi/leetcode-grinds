class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        newArr = []
        for i in range(2):
            for j in range(len(nums)):
                newArr.append(nums[j])
        return newArr
        