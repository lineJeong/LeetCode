/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    
    for(let i=0; i<operations.length; i++) {
        if(operations[i] === "++X" || operations[i] === "X++") result = result + 1;
           else result = result - 1;
    }
        return result;
};