process.stdin.resume();
process.stdin.setEncoding("utf8");

var input_string = "";
// readlineを使えるようにする。readlineは標準入力からデータを簡単に受け取れる。
var reader = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout
});

// linesにあたいを代入する。。
reader.on("line", (line) => {
    input_string = line;
});

reader.on("close", () => {
    var frequency = 0;
    for(let i = 0; i < input_string.length; i++) {
        if(input_string[0] === 1) frequency++;
    }
    console.log(frequency);
})
