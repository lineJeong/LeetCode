/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = "";
    for(let i=0; i<command.length; i++) {
        if(command[i] === ")") continue;
        
        if(command[i] === "(") {
            if(command[i+1] === ")") result = result + "o";
            else continue;
        } else result = result + command[i];
    }
    return result;
};