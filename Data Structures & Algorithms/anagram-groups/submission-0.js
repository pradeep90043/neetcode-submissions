class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const getKey = (str) => {
            let key = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                let index = str[i].charCodeAt(0) - 97;
                key[index]++;
            }
            return key.join("#");
        };
        let hash = {};
        for (let i = 0; i < strs.length; i++) {
            let key = getKey(strs[i]);

            if (!hash[key]) hash[key] = [];
            hash[key].push(strs[i])
        }
        console.log(hash);
        return Object.values(hash);
    }
}
