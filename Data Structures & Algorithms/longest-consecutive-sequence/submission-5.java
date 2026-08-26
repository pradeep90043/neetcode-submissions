class Solution {
    public int longestConsecutive(int[] nums) {
        Set store = new HashSet<>();
        for (int num : nums) {
            store.add(num);
        }

        int longest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (store.contains(nums[i] - 1))
                continue;
            int localLong = 0;
            int current = nums[i];
            while (store.contains(current)) {
                localLong++;
                current++;
            }
            longest = Math.max(longest, localLong);
        }
        return longest;
    }
}
