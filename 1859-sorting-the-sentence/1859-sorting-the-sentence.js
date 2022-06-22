/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ");
    let newArr = new Array(arr.length).fill();
    
    for(let i=0; i<arr.length; i++) {
        newArr[Number(arr[i][arr[i].length-1])-1] = arr[i];
    }
    
    let str = newArr.join(" ");
    let result = "";
    const digits = "123456789";
    
    for(let i=0; i<str.length; i++) {
        if(!digits.includes(str[i])) result = result + str[i];
    }
    
    return result;
};