const { input } = require('../../input.js')

const halfDiamondStar = (n) => {
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write('*')
        }
        console.log()
    }

    for(let i=n-1; i>=1; i--){
        for(let j=1; j<=i; j++){
            process.stdout.write('*')
        }
        console.log()
    }
}

const n = parseInt(input('Enter number of rows: '))
halfDiamondStar(n)