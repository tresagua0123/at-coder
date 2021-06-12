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

reader.on("close", () => {
    let MIN = Math.pow(10, 9);
    let isOddIncluded = false;
    for(let i = 0; i < 200; i++){
        if(lines[0] % 2 !== 0){
            isOddIncluded = true;
            return;
        }
        if(lines[i] < MIN){
            MIN = lines[i]; 
        }
    }
    const divisionNum = Math.floor(Math.log2(MIN));
    console.log(isOddIncluded ? Number(0) : divisionNum)
})
