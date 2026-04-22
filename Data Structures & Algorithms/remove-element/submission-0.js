class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l = 0;
        let r = 0;
        while (r < nums.length) {
            while (nums[r] == val && r < nums.length) r++;
            if((nums[r] == val)||r>=nums.length) break
            nums[l] = nums[r]??nums[l-1]
            l++;
            r++;
        }
      console.log(l,r,nums)

        return l;
    }
}
