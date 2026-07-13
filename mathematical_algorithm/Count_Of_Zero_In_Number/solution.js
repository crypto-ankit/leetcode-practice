const { input } = require('../../input')

const countOfZeroInNumber = (n) =>{
    if (n === 0) return 1;
    n = Math.abs(n)
    let count = 0;

    while(n>0){
        let rem = n%10;
        if(rem === 0) count++ ;
        n = Math.trunc(n/10)
    }
    return count;
} 

const n = parseInt(input(`Enter the number`))
console.log(`Number of Zeros in ${n} are ${countOfZeroInNumber(n)}`)