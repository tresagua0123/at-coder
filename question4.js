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

X = 20000;

reader.on("close", () => {
    let result = 0;
    for(let a = 0; a < lines[0] + 1; a++){
        for(let b = 0; b < lines[1] + 1; b++){
            for(let c = 0; c > lines[2] + 1; c++){
                let total = 500 * a + 100 * b + 50 * c;
                if(total === lines[3]) {result++}
            } 
        }
    }
    console.log(result);
})
