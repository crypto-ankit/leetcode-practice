const { input } = require('../../input.js');

const invertedInputRightHalfPyramidOptimized = (n) => {
    for(let i=n; i>=1; i--){
        for(let j=1; j<=i; j++){
            process.stdout.write('*')
        }
        console.log()
    }
}

const m = parseInt(input("Enter number of rows: "));
invertedInputRightHalfPyramidOptimized(m)