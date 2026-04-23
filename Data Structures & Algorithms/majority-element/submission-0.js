class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let rc = Math.floor(nums.length / 2);
        let hash = {};
        for (let num of nums) {
            hash[num] = (hash[num] || 0) + 1;
            if(hash[num]>rc){
                return num
            }
        }
    }
}
