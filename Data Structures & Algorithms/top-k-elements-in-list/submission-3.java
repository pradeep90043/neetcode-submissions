class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        PriorityQueue<Map.Entry<Integer, Integer>> pq =
            new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());
        int[] output = new int[k];
        Map<Integer, Integer> store = new HashMap<>();
        for (int num : nums) {
            store.put(num,store.getOrDefault(num, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : store.entrySet()) {
            pq.offer(entry);
            if (pq.size() > k) {
                pq.poll();
            }
        }
        int i = 0;
         while (!pq.isEmpty()) {
            output[i++] = pq.poll().getKey();
        }

        return output;
    }
}
