/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let maxBeforExtra = 0;
    
    for(let i=0; i<candies.length; i++) {
        if(candies[i] > maxBeforExtra) maxBeforExtra = candies[i];
    }
    
    for(let i=0; i<candies.length; i++) {
        if(candies[i] + extraCandies >= maxBeforExtra) result.push(true)
        else result.push(false)
    }
    
    return result;
};