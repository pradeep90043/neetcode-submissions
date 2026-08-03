class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const store = {};
        for (let n of nums) {
            store[n] = (store[n] || 0) + 1;
        }
        const topKeys = Object.entries(store).sort((a,b)=>b[1]-a[1]).slice(0,k).map(([key])=>Number(key))
        return topKeys
    }
}
