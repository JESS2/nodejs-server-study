//모듈을 추출한다
var fs = require('fs');
var http = require('http');

//웹 서버를 생성하고 실행한다
http.createServer(function(request, response) {
    //html 파일을 읽는다
    fs.readFile('htmlPage.html', function(error, data) {
        response.writeHead(200, {'content-type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
})