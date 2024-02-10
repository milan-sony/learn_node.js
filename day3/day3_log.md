## Day 3/15

📅 10/02/2024 | Things I have learned/ done.

### Server creation (Node JS)

```js
var http = require('http')

// http.createServer(server).listen(7000)

// Callback function
// function server(req, res){
//     res.write("Hello World! My name is Milan Sony")
//     res.end()
// }

// method 2 : common writing format
http.createServer(function (req, res){
    res.write("Hello World! My name is Milan Sony")
    res.end()
}).listen(7000)
```