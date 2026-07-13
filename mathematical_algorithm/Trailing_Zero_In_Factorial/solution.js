const { input } = require('../../input')

//this solition is not correct for higher value, since it will be overfloe issue
const trailingZeroInFactorial = (n) => {
    if(n ==0 ) return 0;

    let fact = 1;
    for(let i=2; i<=n; i++){
        fact = fact*i;
    }

    let count = 0;
    while(fact%10 === 0){
        count++;
        fact = Math.trunc(fact/10)
    }
    return count;
}

let n = parseInt(input('Enter number: '))
console.log(`Number of trailing zero in factorial of ${n} are: ${trailingZeroInFactorial(n)}`)

const trailingZeroFactorial = (n) => {
    if (n == 0) return 0;
    let count = 0;
    for(let i=5; i<=n; i=i*5){
        count = count + Math.trunc(n/i)
    }
    return count;
}

let m = parseInt(input('Enter number: '))
console.log(`Number of trailing zero in factorial of ${m} are: ${trailingZeroFactorial(m)}`)