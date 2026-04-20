class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {}
        for(let n of nums){
            if(hash[n]) return true
            hash[n]=true
        }
        return false
    }
}
