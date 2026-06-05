class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {



        // let i = 0;
        // let j = nums.length - 1;


        // while (i < j) {
        //     let sum = nums[i] + nums[j]; 
        //     if(target == sum) {
        //         return [i,j];
        //     } 
        //      if(target > sum) {
        //         i++;
        //     } 
        //     if(target < sum){
        //         j-- ;
        //     }
        // }
        let map = new Map();
        for(let i = 0 ;i < nums.length ;i++) {

            let newTarget = target - nums[i];


            if(map.has(newTarget)) {
                return [i,map.get(newTarget)];
            } 
                map.set(nums[i],i);
            
        }
    }
}
