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
const start = (Date.now() / 1000)
const sum = (sumOfNumbers(9999999999999))
console.log('sum: ',sum.toLocaleString())
const end = (Date.now() / 1000)
console.log((end - start).toFixed(5) )