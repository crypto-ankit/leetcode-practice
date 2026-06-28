const { input } = require('../../input.js')

const rightHalfPyramid = (n) =>{
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write('*')
        }
        console.log()
    }
}

const m = parseInt(input("Enter number of rows: ")); 
rightHalfPyramid(m)