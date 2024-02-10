// Serving HTML file as response to server

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){

    fs.readFile('./samplehtml.html', function(err, data){

        res.writeHead(200, {
            'content-Type': 'text/html'
        });
        
        res.write(data);
        res.end();

    });

}).listen(7000);