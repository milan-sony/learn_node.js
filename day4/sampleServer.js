// Routing

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){

    if(req.url === '/' ){

        fs.readFile('./samplehtml.html', function(err, data){
    
            res.writeHead(200, {
                'content-Type': 'text/html'
            });
            
            res.write(data);
            res.end();
    
        });

    }else if(req.url === '/login'){

        res.writeHead(200, {
            'content-Type': 'text/html'
        });

        res.write('Login');
        res.end();

    }else{

        res.writeHead(404, {
            'content-Type': 'text/html'
        });

        res.write('404 Page Not Found');
        res.end();
    }


}).listen(7000, () => console.log('Server Started'));