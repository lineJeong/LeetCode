/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {  
    let xNums = [];
    let yNums = [];
    let result = [];
    for(let i=0; i<nums.length; i++) {
        if(i<n) xNums.push(nums[i]);
        else yNums.push(nums[i]);
    }
    
    for(let i=0; i<xNums.length; i++) {
        for(let j=0; j<yNums.length; j++) {
            if(i===j) result.push(xNums[i], yNums[j]);
        }
    }
    return result;
};