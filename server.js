var http = require('http'),
    port = process.env.PORT || 8001;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content_Type': 'text/plain'});
    res.end('Hello, fucking world!\n');
}).listen(parseInt(port));