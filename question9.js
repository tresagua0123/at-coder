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

    const S = "dreamdreamer";
    const reversedS = S.split("").reverse().join("");
    const wordsArray = ["dream", "dreamer", "erase", "eraser"];
    const reversedWordsArray = wordsArray.map(val => val.split("").reverse().join(""));

    let canDivided = true;
    for(let i = 0; i < S.length;){
        const fiveWords = reversedS.substr(i, 5);
        const sixWords = reversedS.substr(i, 6);
        const sevenWords = reversedS.substr(i, 7);
        if(fiveWords === reversedWordsArray[0] || fiveWords === reversedWordsArray[2]){
            i += 5;
        } else if (sixWords === reversedWordsArray[3]){
            i += 6;
        } else if (sevenWords === reversedWordsArray[1]){
            i += 7;
        } else {
            canDivided = false;
            break;
        }
    }
    console.log(canDivided);
})
