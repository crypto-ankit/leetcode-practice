const { input } = require('../../input.js')

const rightHalfPyramid = (n) => {
    for(let i=1; i<=n; i++){
        let row = ''
        for(let j=1; j<=i; j++){
            row += '*'
        }
        console.log(row)
    }
}
const n = parseInt(input("Enter number of rows: ")); 
rightHalfPyramid(n)
