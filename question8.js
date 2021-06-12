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
    const N = 9; 
    const Y = 45000;
    const result = [];
    for(let a = 0; a <= N; a ++){
        for(let b = 0; b <= N - a; b++){
            const c = N - b - a;
            const total = a * 10000 + b * 5000 * c * 1000;
            if(total === Y) {
                result.push(a, b, c);
                return;
            }
        }
    }
    console.log(result === [] ? [-1, -1, -1] : result);
})
