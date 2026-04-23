class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a, b) => b - a);
        let count = 0;
        let candidate;
        for (let num of nums) {
            if (count === 0) {
                candidate = num;
            }

            count += candidate == num ? 1 : -1;
        }
        return candidate;
    }
}
