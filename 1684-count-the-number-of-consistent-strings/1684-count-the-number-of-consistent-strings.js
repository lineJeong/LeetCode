/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = [];
    
    for(let i=0; i<words.length; i++) {
        for(let j=0; j<words[i].length; j++) {
            if(!allowed.includes(words[i][j])) break;
            else if(j === words[i].length-1) result.push(words[i]);
        }
    }
    return result.length;
};