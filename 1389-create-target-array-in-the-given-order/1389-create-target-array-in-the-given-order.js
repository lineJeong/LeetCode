/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = []
    
    for(let i=0; i<index.length; i++) {
        if(result[index[i]] === undefined) result[index[i]] = nums[i];
        else result.splice(index[i], 0, nums[i]);
    }
    return result;
};

