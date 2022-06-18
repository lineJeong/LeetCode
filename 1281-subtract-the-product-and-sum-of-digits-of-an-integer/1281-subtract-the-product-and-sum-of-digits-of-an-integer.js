/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
    n = String(n);
    let multiply = 1;
    let sum = 0;
    let str = '';
    
    for(let i=0; i<n.length; i++) {
        str = str + n[i];
    }
    
    for(let i=0; i<str.length; i++) {
        multiply = multiply * Number(str[i]);
        sum = sum + Number(str[i]);
    }
    
    return multiply - sum;
};