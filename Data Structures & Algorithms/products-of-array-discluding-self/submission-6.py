class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = 1;
        n=len(nums);
        output = [0]*n;
        for i in range(n):
         output[i]=prefix;
         prefix=nums[i]*prefix;
        
        suffix =1;
        for i in range(n-1,-1,-1):
         output[i]=suffix * output[i];
         suffix=nums[i]*suffix;
        
        return output