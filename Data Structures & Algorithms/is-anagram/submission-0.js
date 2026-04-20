class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const getKey = (str) => {
            let key = new Array(26).fill(0);
            for (let char of str) {
                let index = char.charCodeAt(0) - 97;
                key[index]++;
            }
            return key.join("@");
        };
        return getKey(s) == getKey(t);
    }
}
