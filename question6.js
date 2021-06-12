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

const N = 3;
const aArray = [2, 7, 4];

reader.on("close", () => {
    let sumA = 0;
    let sumB = 0;
    for(let i = 1; i <= N; i++){
        if(i % 2 !== 0){
            sumA += Math.max(aArray);
        } else {
            sumB += Math.max(aArray);
        }
    }
    console.log(sumA - sumB);
})
