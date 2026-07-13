const { input } = require('../../input')

const trailingZeroCount = (n) =>{
    if(n === 0) return 1
    n = Math.abs(n)
    let count = 0;

    while(n%10 === 0){
        count ++;
        n = Math.trucn(n/10);
    }

    return count;
}

const n = parseInt(input(`Enter the number`))
console.log(trailingZeroCount(n))