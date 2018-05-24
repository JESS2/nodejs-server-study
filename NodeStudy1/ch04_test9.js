var http = require('http');

var server = http.createServer();

server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

setTimeout(function() {
    console.log('서버 종료');
    server.close();
},10000);