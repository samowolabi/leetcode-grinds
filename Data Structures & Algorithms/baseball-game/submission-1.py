class Solution:
    def calPoints(self, operations: List[str]) -> int:
        record = []
        totalScore = 0

        for i in range(len(operations)):
            currentValue = operations[i]

            if (currentValue == "D"):
                newValue = 2 * record[len(record) - 1]
                record.append(newValue)
                totalScore = totalScore + newValue
            elif (currentValue == "C"):
                removedValue = record.pop()
                totalScore = totalScore - removedValue
            elif (currentValue == "+"):
                newValue = record[len(record) - 1] + record[len(record) - 2]
                record.append(newValue)
                totalScore = totalScore + newValue
            else:
                newValue = int(currentValue)
                record.append(newValue)
                totalScore = totalScore + newValue

        return totalScore
        