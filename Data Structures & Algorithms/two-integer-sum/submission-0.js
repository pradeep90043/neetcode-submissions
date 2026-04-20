class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
        for (let i = 0; i < nums.length; i++) {
            let req = target - nums[i];
            if (hash[req] != undefined) return [i, hash[req]];
            hash[nums[i]] = i;
        }
    }
}
