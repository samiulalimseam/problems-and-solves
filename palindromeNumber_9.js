/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numToArr = Array.from(String(x),Number)
    return JSON.stringify(numToArr) == JSON.stringify(numToArr.reverse()) && x>=0
};
console.log(isPalindrome(-1221))