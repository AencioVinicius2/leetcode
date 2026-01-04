/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const splitString = str.split("");
    const reversed = splitString.reverse();
    const intArr = reversed.map(numStr => parseInt(numStr, 10));
    const numbers = Number(intArr.join(""));

    if(x !== numbers) {
        return false;
    }
    
    return true;
};

isPalindrome(123)