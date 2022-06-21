/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "123456789";
    let result = [];
    
    const startIdx = alpha.indexOf(s[0]);
    const endIdx = alpha.indexOf(s[3]);
    const startNum = num.indexOf(s[1]);
    const endNum = num.indexOf(s[4]);
    
    for(let i=startIdx; i<endIdx+1; i++) {
        for(let j=startNum; j<endNum+1; j++) {
            result.push(alpha[i]+num[j]);
        }
    }
    return result;
};