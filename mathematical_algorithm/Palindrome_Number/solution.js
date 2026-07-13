const { input } = require('../../input')

const ispalindrome = (n) => {
    const temp = n;
    if(n === 0 ) return true;
    if(n < 0 ) return false;

    let reverse = 0;
    while (n > 0){
        reverse = reverse*10+n%10
        n = Math.trunc(n/10)
    }
    return (reverse === temp)
}

const n = parseInt(input('Enter the number: '))
console.log(` Is ${n} a palindrome number: ${ispalindrome(n)}`)