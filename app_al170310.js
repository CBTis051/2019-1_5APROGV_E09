var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8 /n'});

    res.end('Hola mundo Node JS Repo GIT - naidelyn Tamayo Ruiz');

}).listen(8081);
console.log('Server running on port 8081');