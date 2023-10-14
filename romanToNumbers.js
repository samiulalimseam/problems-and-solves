/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
 for (let i = 0; i < s.length; i++) {
    const current  = values[s[i]];
    const next =values[s[i+1]];
  
    if( next &&  current < next) {
        sum += next - current;
        i++
    } else {
        sum +=  current;
    }
    
    
 }
  return sum;
};
console.log(romanToInt('IX'));