class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const pq = new MinPriorityQueue((item) => item.freq );
        const output = [];
        const store = {};
        for (let num of nums) {
            store[num] = (store[num] || 0) + 1;
        }

        for (let [num, count] of Object.entries(store)) {
            pq.enqueue({ num: Number(num), freq: count });
            if (pq.size() > k) {
                pq.dequeue();
            }
        }
        while (!pq.isEmpty()) {
            output.push(pq.dequeue().num);
        }

        return output;
    }
}
