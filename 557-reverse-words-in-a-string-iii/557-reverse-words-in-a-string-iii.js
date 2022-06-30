/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let split = s.split(" ")
    let result = "";
    
    for(let i=0; i<split.length; i++) {
        for(let j=split[i].length-1; j>=0; j--) {
            if(j===0) result += split[i][j] + " "
            else result += split[i][j]
        }
    }
    return result.slice(0, -1)
};