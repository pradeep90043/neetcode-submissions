class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const store = {};
        for (let i = 0; i < nums.length; i++) {
            if (store[nums[i]] === undefined) {
                store[nums[i]] = true;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (store[nums[i] - 1] !== undefined) continue;
            let localLong = 0;
            let current =nums[i]
           while(store[current]!=undefined){
            localLong++
            current++
           }
            longest = Math.max(longest, localLong);
        }
        return longest
    }
}
