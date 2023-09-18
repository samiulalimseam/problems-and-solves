/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let x = "()";
    for(let i = 0; i < n; i++){
        x ++;
    }
    return x;

};

console.log(generateParenthesis(3));
// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]