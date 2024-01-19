function sumOfNumbers (numbers) {
    return numbers * (numbers+1)/ 2
}

function sumOfNumbersLoop (nums){
    let sum = 0
    for(let i=0; i<=nums; i++) {
        sum+= i;
    }
    return sum;
} 
const start = (performance.now() / 1000)
console.log(sumOfNumbers(9999999))
const end = (performance.now() / 1000)
console.log((end - start).toFixed(5) )