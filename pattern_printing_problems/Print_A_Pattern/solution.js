const { input } = require('../../input')

const printA = (n) =>{
    const width = Math.floor(n/2)+1;
    const middle = Math.floor(n/2);

    for(let i=0; i<n; i++){
        for(let j=0; j<width; j++){
            if(i==0){
                if(j>0 && j<width-1){
                    process.stdout.write('*')
                }else{
                    process.stdout.write(' ')
                }
            }
            else if(i==middle){
                process.stdout.write('*')
            }
            else if(j==0 || j==width-1){
                process.stdout.write('*')
            }
            else{
                process.stdout.write(' ')
            }
        }
        console.log(' ')
    }
}
const n = parseInt(input('Enter number of rows: '))
printA(n)