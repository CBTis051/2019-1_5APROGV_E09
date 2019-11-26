var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

res.end('Hola mundo Node JS REPO  GIT- Torres Noriega Karin Enrique\n');
}).listen(8081);
console.log('Server running on port 8081');
