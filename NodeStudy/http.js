var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.write(new Date() + "\n");
    response.end("Hello World! 안녕!\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");