class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded=""
        for(let str of strs){
encoded = encoded  + str.length+"#"+ str
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
   let i=0
   const res = []
   while(i<str.length){
    let j=i
    while(str[j]!=="#"){
        j++
    }
    let len = Number(str.slice(i,j))
    let word = str.slice(j+1,len+j+1)
    i=j+1+len
res.push(word)
   }
   return res
    }
}
