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

const N = 4;
const Q = 3;
const d = [8, 10, 8, 6];

reader.on("close", () => {
    let sum = 0;
    for(let i = 1; i <= N; i++){
        if(d[i] === d[i-1]) sum ++;
    }
    console.log(sum);
})
