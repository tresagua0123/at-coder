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
    var ab = lines[0] * lines[1];
    var showEvenOrOdd = (ab % 2 === 0) ? "Even" : "Odd";
    console.log(showEvenOrOdd);
})
