process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
// readlineを使えるようにする。readlineは標準入力からデータを簡単に受け取れる。
var reader = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout
});

// linesにあたいを代入する。。
reader.on("line", (line) => {
    lines.push(parseInt(line));
});

const LINES0 = 2432;
const LINES1 = 2;
const LIENS2 = 34;

reader.on("close", () => {

    const getSumOfDegits = (n) => {
        let sum = 0;
        while(n > 0){
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    let sumOfResult = 0;

    for(let i = 1; i <= LINES0; i++){
        const sumOfDegits = getSumOfDegits(i);
        if (sumOfDegits >= LINES1 && sumOfDegits <= LIENS2){
            sumOfResult += sumOfDegits;
        }
    }

    console.log(sumOfResult);
   
})
