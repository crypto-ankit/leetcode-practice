const { input } = require('../../input.js')

const leftHalfPyramid = (n) => {
    for(let i=1; i<=n; i++){
        
        //loop for printing space
        for(let j=1; j<=n-i; j++){
            process.stdout.write(' ')
        }

        //loop for printing stars
        for(let j=1; j<=i; j++){
            process.stdout.write('*')
        }

        //console.log give next line
        console.log()
    }
}

const n = parseInt(input("Enter number of rows: "))
leftHalfPyramid(n)