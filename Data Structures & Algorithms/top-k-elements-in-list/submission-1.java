class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();

        // count frequencies
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        // Convert map entries to a list
        List<Map.Entry<Integer, Integer>> list = new ArrayList<>(freq.entrySet());

        // sort by frquency (descending)
        list.sort((a, b) -> b.getValue() - a.getValue());

        // store top k elemts
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = list.get(i).getKey();
        }
        return result;
    }
}
