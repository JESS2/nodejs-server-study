var fs = require("fs");

console.log("----------파일 읽기 시작----------");
fs.readFile('http.js', (err, data) => {
    var s = data.toString();
    console.log("----------파일 읽기 끝----------");
    console.log("----------출력 시작----------");
    console.log(s);
    console.log("----------출력 끝----------");
})