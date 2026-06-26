const { input } = require('../../input.js');

const invertedInputRightHalfPyramid = (n) =>{
    for(let i=n; i>=1; i--){
        let row = '';
        for(let j=1; j<=i; j++){
            row += '*';
        }
        console.log(row);
    }
}

let n = parseInt(input("Enter number of rows: "));
invertedInputRightHalfPyramid(n)