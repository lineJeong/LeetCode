/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = []
    result[0] = nums[0]
    for (i = 1; i < nums.length; i++) {
        result.push(result[i - 1] + nums[i])
    }  
    return result
};