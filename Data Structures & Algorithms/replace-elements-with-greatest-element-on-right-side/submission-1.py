class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        original = list(arr)

        for i in range(len(arr)):
            if i == len(arr) - 1:
                arr[i] = -1
            else:
                max_number = original[i + 1]

                for j in range(i + 1, len(original)):
                    if original[j] > max_number:
                        max_number = original[j]

                arr[i] = max_number

        return arr
        