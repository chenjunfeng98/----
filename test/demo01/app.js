const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
// const common = require('./module/common.js');

http.createServer(function (request, response) {
    let api = request.url;
    let result = url.parse(api);
    console.log(result.pathname)
    response.writeHead(200, {'Content-Type': `text/html;charset:"utf-8"`});
    response.write('<head><meta charset="UTF-8"></head>');
    response.end('hello');

}).listen(3000);

console.log('success!!!')