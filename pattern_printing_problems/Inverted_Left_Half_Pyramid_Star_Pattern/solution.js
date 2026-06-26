const { input } = require('../../input.js')

const invertedLeftHandPyramidOptimized = (n) => {
    for(let i = n; i>=1; i--){
        for(let j = 1; j<=n-i; j++){
            process.stdout.write(' ')
        }
        for(let j=1; j<=i; j++){
            process.stdout.write('*')
        }
        console.log()
    }
}

let m = parseInt(input("Enter number of rows: "))
invertedLeftHandPyramidOptimized(m)