require('http').createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/html'});
    response.end('<h1>hello web server with node.js</h1>');
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});