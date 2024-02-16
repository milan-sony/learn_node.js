// Routing

var http = require('http');
var fs = require('fs');
var url = require('url')

http.createServer(function (req, res){

    var q = url.parse(req.url, true)
    console.log(q.pathname)

    if(q.pathname === '/' ){

        fs.readFile('./samplehtml.html', function(err, data){
    
            res.writeHead(200, {
                'content-Type': 'text/html'
            });
            
            res.write(data);
            res.end();
    
        });

    }else if(q.pathname === '/signup'){

        fs.readFile('./signup.html', (err, data) =>{

            res.writeHead(200, {
                'content-Type': 'text/html'
            });

            res.write(data);
            res.end();

        });

    }else if(q.pathname === '/signupaction'){

        res.writeHead(200, {
            'content-Type': 'text/html'
        });

        console.log(q.query.email)

        res.write('<h1>'+q.query.email+'<h1>');
        res.end();

    }else{

        res.writeHead(404, {
            'content-Type': 'text/html'
        });

        res.write('404 Page Not Found');
        res.end();

    }

}).listen(7000, () => console.log('Server Started'));