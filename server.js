var express = require('express');
var server = express();

server.listen(process.env.PORT, function() {
    console.log('NodeJS %s server listening at http://%s:%s', process.version, process.env.IP, process.env.PORT);
});


server.get('/', function(req,res){
    //console.log(req.headers);
    res.send('Usage: https://stark-everglades-59365.herokuapp.com/api/whoami');
});

server.get('/api/whoami', function(req, res) {
    
    console.log(req.ip);
    
    console.log(req.headers['user-agent']);
    console.log(req.headers['accept-language']);
    
    var o = {
        "ipaddress": "123.456.78.9",
        "language": "en-CA",
        "software": "Windows 7"
    };

    res.send(o);
});
