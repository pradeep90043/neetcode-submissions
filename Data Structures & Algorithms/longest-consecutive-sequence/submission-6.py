class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        store = set()
        for num in nums:
            store.add(num)
        longest=0

        for num in nums:
            if num-1 in store:
                continue
            localLong=0
            current=num
            while current in store:
                localLong+=1
                current+=1
            longest = max(longest,localLong) 
        return longest           
        