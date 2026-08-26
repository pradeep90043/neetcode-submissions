class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const store = new Set(nums);
      

        for (let i = 0; i < nums.length; i++) {
            if (store.has(nums[i]-1)) continue;
            let localLong = 0;
            let current =nums[i]
           while(store.has(current)){
            localLong++
            current++
           }
            longest = Math.max(longest, localLong);
        }
        return longest
    }
}
