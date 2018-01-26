var http = require('http');
var stream = require('./stream');

var server = http.createServer(function(req, res) {

    console.log("URL of this page is " + req.url);
    
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // res.end('Это кирилица! Широка страна моя родная...ישראל');
    var myReadShort = stream.fs.createReadStream(__dirname + '/index.html', 'utf8');
    stream.myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('we listen for 3000 port');
