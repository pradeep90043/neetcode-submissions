class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length < 2) return strs[0];
        const common = (str1, str2) => {
            let ns = "";
            for (let i = 0; i < str2.length; i++) {
                if (str1[i] === str2[i]) {
                    ns = ns + str1[i];
                } else {
                    break;
                }
            }
            return ns;
        };
        let l = common(strs[0], strs[1]);
        for (let i = 2; i < strs.length && l != ""; i++) {
            l = common(l, strs[i]);
        }
        return l;
    }
}
