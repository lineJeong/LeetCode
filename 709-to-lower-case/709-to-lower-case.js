/**
 * @param {string} s
 * @return {string}
 */
// var toLowerCase = function(s) {
//     return s.toLowerCase();
// };

var toLowerCase = function(s) {
    const uppercase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklnmopqrstuvwxyz";
    let result = "";
    
    for(let i=0; i<s.length; i++) {
        let idx = uppercase.indexOf(s[i]);
        if(idx !== -1) result += lowercase[idx];
        else result += s[i];
    }
    return result;
};