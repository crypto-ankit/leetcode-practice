const { input } = require('../../input.js');

const printRow = (n, i) => {
    for(let j=1; j<=n-i; j++){
            process.stdout.write(' ')
        }

        for(let j=1; j<=i; j++){
            process.stdout.write('* ')
        }
        
        console.log()
}
const diamondShape = (n) =>{
    for(let i=1; i<=n; i++){
        printRow(n,i)
    }

    for(let i=n; i>=1; i--){
        printRow(n,i)
    }
}


const n = parseInt(input('Enter Number of rows: '))
diamondShape(n)