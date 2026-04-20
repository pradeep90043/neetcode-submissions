class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hash = {};
        for (let char of s) {
            hash[char] = (hash[char] || 0) + 1;
        }
        for (let char of t) {
            if (!hash[char]) return false;
            else --hash[char];
        }
        return !Object.values(hash).reduce((cur,acc)=>cur+acc,0)>0;
    }
}
