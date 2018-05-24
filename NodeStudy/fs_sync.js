var fs = require("fs");

console.log('----------파일 읽기 시작----------');
var data = fs.readFileSync('http.js');
console.log('----------파일 읽기 끝----------');
console.log('----------출력 시작----------');
console.log(data.toString());
console.log('----------출력 끝----------');