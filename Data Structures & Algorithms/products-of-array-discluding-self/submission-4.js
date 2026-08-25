class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = []
        let prefix=1
        for(let i=0;i<nums.length;i++){
          
            output[i]= prefix
              prefix = prefix*nums[i]
        }
        console.log(output)
         let suffix=1
           for(let i=nums.length-1;i>=0;i--){
          
            output[i]= output[i]*suffix
              suffix = suffix*nums[i]
        }
        return output
    }
}
