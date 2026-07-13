const { input } = require('../../input')

const countDigit = (n) => {
    let count = 0;
    
    if(n===0){
        count = 1;
        return count
    }

    while(n!==0){
        n = Math.trunc(n/10) //cant use floor, becuase if number reaches to -1, it will never complete loop since Math.floor(-1/10) = Math.floor(-0.1 )would be -1 will never equal to 0 so loop will never stop
        count++
    }
    return count;
}

const n = parseInt(input('Enter Number:'))
console.log(`Count of digit in ${n} are ${countDigit(n)}`)

//with logarithmin function

const countDigitWithLog = (n) => {
    if(n===0){
        return 1
    }

    n = Math.abs(n)

    let count = Math.floor(Math.log10(n))+1 //cant use Math.ceil in place of Math.floor(Math.log(n))+1 , it will wrong for 100
    return count
}
const n = parseInt(input('Enter Number:'))
console.log(`Count of digit in ${n} are ${countDigitWithLog(n)}`)