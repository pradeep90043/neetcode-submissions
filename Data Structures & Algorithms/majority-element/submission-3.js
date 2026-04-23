class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let rc = Math.floor(nums.length / 2);
        nums.sort((a, b) => b - a);
        let count = 0;
        let number = nums[0];
        for (let num of nums) {
            if (number == num) {
                ++count;
            } else if (count > rc) {
                return num;
            } else {
                number = num;
                count = 1;
            }
            if (count > rc) {
                return num;
            }
        }
    }
}
