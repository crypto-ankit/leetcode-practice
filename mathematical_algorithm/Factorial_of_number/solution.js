const { input } = require('../../input.js')
//This one is better because with recursion it takes O(n) space complexity.
const factorial = (n) => {
    if(n==0 || n==1) return 1;
    let factorial = 1;
    for(let i=2; i<=n; i++){
        factorial = factorial*i
    }
    return factorial
}

const n = parseInt(input('Enter the number: '))
console.log(`Factorial of ${n} is ${factorial(n)}`)

// Using recursion to find factorial

const factorialByRecursion = (n) =>{
    if(n ===0 ) return 1
    return n*factorialByRecursion(n-1)
}

const m = parseInt(input('Enter the number: '))
console.log(`Factorial of ${m} is ${factorialByRecursion(m)}`)